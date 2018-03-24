import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Logo from '../assets/imgs/logo_small.png'

export const AboutPageTemplate = ({
  mission_text,
  vision_text,
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
              <div className="row">
                {/* About Text */}
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="about-text has-layout">
                    <h3>Our Mission</h3>
                    <h4>{mission_text}</h4>
                    <h3>Our Vision</h3>
                    <h4>{vision_text}</h4>
                  </div>
                </div>
                {/* About Text */}

                {/* About Img */}
                <div className="col-sm-6">
                  <div className="our-mission">
                    <img src="assets/images/our-mission.png" alt="" />
                  </div>
                </div>
                {/* About Img */}
              </div>
            </div>
            <div className="session-news curve-down style-2 has-layout">
              <span className="scho-service-icon style-2">
                <img src={Logo} alt="" />
              </span>
              <img src={require('../assets/imgs/about-img-2.jpg')} alt="" />
              <div className="news-caption position-center-x">
                <h4>Session 2017 Addmission Open</h4>
                <p>
                  Welcome to KG daycare, preschool, and kindergarten How to
                  Enroll Your Child to a Class?
                </p>
              </div>
              <div className="enroll-now">
                <p>Get started today!</p>
                <a className="tc-btn" href="https://shop.srrobots.com/">
                  Buy Now
                </a>
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
      mission_text={post.frontmatter.missionText}
      vision_text={post.frontmatter.visionText}
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
        missionText
        visionText
      }
    }
  }
`
