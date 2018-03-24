import React from 'react'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import Logo from '../assets/imgs/logo_small.png'
import HelloRobot from '../assets/imgs/hello_robot.jpg'
import FutureRobot from '../assets/imgs/future-robot.jpg'
import PlayingWRobot from '../assets/imgs/kid-playing-robot.jpg'

export const AboutPageTemplate = ({
  mission_section,
  subheading,
  title,
  top_image,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <main id="main" className="about-bg">
      <section className="about-holder tc-padding">
        <div className="container">
          <div className="about-content has-layout">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="about-img-2">
                  <img src={top_image} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="about-text style-2">
                  <h5>{subheading}</h5>
                  <h3>{title}</h3>
                  <PageContent content={content} className="content" />
                  <div className="kids-img has-layout">
                    <ul>
                      <li>
                        <img
                          src={require('../assets/imgs/kids-imgs/img-01.png')}
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={require('../assets/imgs/kids-imgs/img-02.png')}
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={require('../assets/imgs/kids-imgs/img-03.png')}
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={require('../assets/imgs/kids-imgs/img-04.png')}
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-mission-holder">
              <div className="row align-items-center">
                {/* About Text */}
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="about-text has-layout">
                    <h3>Our Mission</h3>
                    <h4>{mission_section.missionText}</h4>
                    <h3>Our Vision</h3>
                    <h4>{mission_section.visionText}</h4>
                  </div>
                </div>
                {/* About Text */}

                {/* About Img */}
                <div className="col-sm-6">
                  <div className="our-mission">
                    <img src={mission_section.section_image} alt="" />
                  </div>
                </div>
                {/* About Img */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      subheading={post.frontmatter.subheading}
      top_image={post.frontmatter.top_image}
      mission_section={post.frontmatter.mission_section}
    />
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        subheading
        title
        top_image
        mission_section {
          missionText
          visionText
          section_image
        }
      }
    }
  }
`
