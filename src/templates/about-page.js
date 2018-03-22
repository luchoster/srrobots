import React from 'react'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <main id="main" className="about-bg">
      <section className="about-holder tc-padding">
        <div className="container">
          <div className="about-content has-layout">
            <div className="row">
              <div className="col-sm-6">
                <div className="about-img-2" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="about-text style-2">
                  <h5>Story Teller, Painting</h5>
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
            <div className="session-news curve-down style-2 has-layout">
              <span className="scho-service-icon style-2">
                <img
                  src={require('../assets/imgs/school-services/img-1-1.png')}
                  alt=""
                />
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
    />
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
