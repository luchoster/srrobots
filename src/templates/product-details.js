import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import { rawMarkup } from '../lib/helpers'

export const ProductPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div dangerouslySetInnerHTML={rawMarkup(content)} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default props => {
  const { markdownRemark: post } = props.data

  return (
    <ProductPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Shop | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
    />
  )
}

export const pageQuery = graphql`
  query ProductPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        slug
        sku
        price
        prod_image
      }
    }
  }
`
