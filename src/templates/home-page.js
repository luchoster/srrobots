import React from 'react'

export const HomePageTemplate = ({ heading, subheading, intro, slider }) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">{heading}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <HomePageTemplate
      heading={frontmatter.heading}
      subHeading={frontmatter.subHeading}
      slider={frontmatter.hero}
      intro={frontmatter.intro}
      main={frontmatter.main}
    />
  )
}

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        subheading
        intro {
          blurbs {
            image
            text
          }
        }
        hero {
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
      }
    }
  }
`
