import * as R from 'ramda'
import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import { notNilOrEmpty, mapIndexed } from '../lib/helpers'
import parallaxBg1 from '../assets/imgs/parallax-1.png'

export default class Home extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const settings = {
      autoplay: true,
      arrows: false,
      dots: true,
      infinite: true,
      speed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const page = posts.filter(
      post => post.node.frontmatter.templateKey === 'home-page'
    )[0].node.frontmatter
    console.log(page)
    return (
      <main id="main">
        <Slider
          {...settings}
          id="banner-slider"
          className="hero-slider banner-slider curve-up sp-horizontal sp-swiping"
        >
          {notNilOrEmpty(page) &&
            mapIndexed((item, index) => (
              <div
                key={index}
                className="slide-img"
                style={{ background: `url(${item.image}) center no-repeat` }}
              />
            ))(page.hero)}
        </Slider>
        <section className="school-area curve-down">
          <span className="scho-service-icon style-2">
            <img
              src={require('../assets/imgs/school-services/img-1-1.png')}
              alt=""
            />
          </span>
          <div className="school-area-heading">
            <h3>{page.heading}</h3>
            <p>{page.subheading}</p>
          </div>
          {/* Services  */}
          <div style={{ background: `url(${parallaxBg1}) 50% 0 no-repeat` }}>
            <div className="container">
              <div className="services-shadow radius-8 overflow-hidden">
                <div className="row no-gutters">
                  <div className="col-sm-4 col-xs-6 r-full-width">
                    <div className="scho-services-figure border-l-0">
                      <span className="scho-service-icon bg-1">
                        <img
                          src={require('../assets/imgs/school-services/img-01.png')}
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">The Best Robots For Kids</a>
                      </h4>
                      <p>{page.intro.blurbs[0].text}</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-6 r-full-width">
                    <div className="scho-services-figure">
                      <span className="scho-service-icon bg-2">
                        <img
                          src={require('../assets/imgs/school-services/img-02.png')}
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Happy Social Group</a>
                      </h4>
                      <p>{page.intro.blurbs[1].text}</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-6 r-full-width">
                    <div className="scho-services-figure">
                      <span className="scho-service-icon bg-3">
                        <img
                          src={require('../assets/imgs/school-services/img-03.png')}
                          src={page.intro.blurbs[2].image}
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">We Love Math &amp; Drawing</a>
                      </h4>
                      <p>{page.intro.blurbs[2].text}</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-6 r-full-width">
                    <div className="scho-services-figure">
                      <span className="scho-service-icon bg-4">
                        <img
                          src={require('../assets/imgs/school-services/img-04.png')}
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Learn With Best Teachers</a>
                      </h4>
                      <p>{page.intro.blurbs[3].text}</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-6 r-full-width">
                    <div className="scho-services-figure">
                      <span className="scho-service-icon bg-5">
                        <img
                          src={require('../assets/imgs/school-services/img-05.png')}
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Happy Social Group</a>
                      </h4>
                      <p>{page.intro.blurbs[4].text}</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-6 r-full-width">
                    <div className="scho-services-figure">
                      <span className="scho-service-icon bg-6">
                        <img
                          src={require('../assets/imgs/school-services/img-06.png')}
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">We Love Math &amp; Drawing</a>
                      </h4>
                      <p>{page.intro.blurbs[5].text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Services  */}
          <div className="row tc-padding-top">
            <div className="kids-img has-layout">
              <ul>
                <li className="animated swing">
                  <img
                    src={require('../assets/imgs/kids-imgs/img-01.png')}
                    alt=""
                  />
                </li>
                <li className="animated lightSpeedIn">
                  <img
                    src={require('../assets/imgs/kids-imgs/img-02.png')}
                    alt=""
                  />
                </li>
                <li className="animated swing">
                  <img
                    src={require('../assets/imgs/kids-imgs/img-03.png')}
                    alt=""
                  />
                </li>
                <li className="animated lightSpeedIn">
                  <img
                    src={require('../assets/imgs/kids-imgs/img-04.png')}
                    alt=""
                  />
                </li>
                <li className="animated fadeInRight">
                  <img
                    src={require('../assets/imgs/kids-imgs/img-05.png')}
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Gallery */}
        {/*
        <section className="tc-padding">
          <div className="container">
            <div className="main-heading-holder">
              <div className="main-heading">
                <h2>Meet Edison</h2>
                <p>Our newest Little Robot</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-3 col-xs-6 r-full-width">
                <figure className="gallery-figure rotate-1">
                  <img
                    src={require('../assets/imgs/gallery/img-01.jpg')}
                    alt=""
                  />
                  <figcaption className="overlay">
                    <h4 className="position-center-center">
                      <a href="gallery.html">
                        School Kids Playing in Classroom
                      </a>
                    </h4>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-4 col-md-3 col-xs-6 r-full-width">
                <figure className="gallery-figure">
                  <img
                    src={require('../assets/imgs/gallery/img-02.jpg')}
                    alt=""
                  />
                  <figcaption className="overlay">
                    <h4 className="position-center-center">
                      <a href="gallery.html">
                        School Kids Playing in Classroom
                      </a>
                    </h4>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-4 col-md-3 col-xs-6 r-full-width">
                <figure className="gallery-figure rotate-1">
                  <img
                    src={require('../assets/imgs/gallery/img-03.jpg')}
                    alt=""
                  />
                  <figcaption className="overlay">
                    <h4 className="position-center-center">
                      <a href="gallery.html">
                        School Kids Playing in Classroom
                      </a>
                    </h4>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-4 col-md-3 col-xs-6 r-full-width">
                <figure className="gallery-figure">
                  <img
                    src={require('../assets/imgs/gallery/img-04.jpg')}
                    alt=""
                  />
                  <figcaption className="overlay">
                    <h4 className="position-center-center">
                      <a href="gallery.html">
                        School Kids Playing in Classroom
                      </a>
                    </h4>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-4 col-md-3 col-xs-6 r-full-width">
                <figure className="gallery-figure rotate-2">
                  <img
                    src={require('../assets/imgs/gallery/img-05.jpg')}
                    alt=""
                  />
                  <figcaption className="overlay">
                    <h4 className="position-center-center">
                      <a href="gallery.html">
                        School Kids Playing in Classroom
                      </a>
                    </h4>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-4 col-md-3 col-xs-6 r-full-width">
                <figure className="gallery-figure rotate-1">
                  <img
                    src={require('../assets/imgs/gallery/img-06.jpg')}
                    alt=""
                  />
                  <figcaption className="overlay">
                    <h4 className="position-center-center">
                      <a href="gallery.html">
                        School Kids Playing in Classroom
                      </a>
                    </h4>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-4 col-md-3 col-xs-6 r-full-width d-none d-sm-block">
                <figure className="gallery-figure rotate-2">
                  <img
                    src={require('../assets/imgs/gallery/img-07.jpg')}
                    alt=""
                  />
                  <figcaption className="overlay">
                    <h4 className="position-center-center">
                      <a href="gallery.html">
                        School Kids Playing in Classroom
                      </a>
                    </h4>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-4 col-md-3 col-xs-6 r-full-width d-none d-sm-block">
                <figure className="gallery-figure rotate-1">
                  <img
                    src={require('../assets/imgs/gallery/img-08.jpg')}
                    alt=""
                  />
                  <figcaption className="overlay">
                    <h4 className="position-center-center">
                      <a href="gallery.html">
                        School Kids Playing in Classroom
                      </a>
                    </h4>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        /* }
        { /* /Gallery */}
      </main>
    )
  }
}

const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: "Home" }) {
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

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            heading
            subheading
            templateKey
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
    }
  }
`
