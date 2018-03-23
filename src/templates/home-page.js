import React from 'react'

export const HomePageTemplate = ({ heading, subheading, intro, hero }) => (
  <section className="section section--gradient">
    <div className="content">{heading}</div>
  </section>
)

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <HomePageTemplate
      heading={frontmatter.heading}
      subHeading={frontmatter.subHeading}
      hero={frontmatter.hero}
      intro={frontmatter.intro}
    />
  )
}

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        subheading
        hero {
          image
          text
        }
        intro {
          blurbs {
            image
            text
          }
        }
      }
    }
  }
`
