import * as R from 'ramda'
import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import Marked from 'marked'
import { notNilOrEmpty, mapIndexed, rawMarkup } from '../lib/helpers'
import ParallaxBg1 from '../assets/imgs/parallax-1.png'
import TestimonialsBG from '../assets/imgs/testimonial-bg.jpg'

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
          <div style={{ background: `url(${ParallaxBg1}) 50% 0 no-repeat` }}>
            <div className="container">
              <div className="services-shadow radius-8 overflow-hidden">
                <div className="row no-gutters">
                  <div className="col-sm-4 col-xs-6 r-full-width">
                    <div className="scho-services-figure border-l-0">
                      <span className="scho-service-icon bg-1">
                        <img src={page.intro.blurbs[0].image} alt="" />
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
                        <img src={page.intro.blurbs[1].image} alt="" />
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
                        <img src={page.intro.blurbs[2].image} alt="" />
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
                        <img src={page.intro.blurbs[3].image} alt="" />
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
                        <img src={page.intro.blurbs[4].image} alt="" />
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
                        <img src={page.intro.blurbs[5].image} alt="" />
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

        {/* About Nersery */}
        <section className="tc-padding">
          <div className="container">
            <div className="row">
              {/* About Img */}
              <div className="about-img">
                <img src={page.mission.image} alt="" />
              </div>
              {/* About Img */}

              {/* About Text */}
              <div className="col-lg-6 col-md-7 pull-right">
                <div className="about-text">
                  <h3 className="curve-heading">About Señor Robots</h3>
                  <div dangerouslySetInnerHTML={rawMarkup(page.mission.text)} />
                  <ul className="check-list">
                    {mapIndexed((item, index) => (
                      <li key={index}>{item.text}</li>
                    ))(page.mission.check_list)}
                  </ul>
                </div>
              </div>
              {/* About Text */}
            </div>
          </div>
        </section>
        {/* About Nersery */}

        {/* Testimonials */}
        <section
          className="testimonial-holder"
          style={{
            background: `url(${TestimonialsBG}) no-repeat center bottom`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-offset-1 col-lg-10">
                <h3 className="curve-heading">Happy Customers</h3>
                <span className="search-lable">
                  <i className="icon-quotes-left" />
                </span>
                <Slider
                  id="testimonials-slider"
                  className="testimonial-slider after-clear"
                >
                  {mapIndexed((item, index) => (
                    <div className="text" key={index}>
                      <p>{item.quote}</p>
                      <div className="aurthor-name">
                        <h3>{item.author}</h3>
                        <span>{item.title && item.title}</span>
                      </div>
                    </div>
                  ))(page.testimonials)}
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}

        {/* Gallery */}
        <section className="tc-padding">
          <div className="container">
            <div className="main-heading-holder">
              <div className="main-heading">
                <h2>Meet Edison</h2>
                <p>Our newest Little Robot</p>
              </div>
            </div>
            <div className="row">
              {mapIndexed((item, index) => (
                <div
                  className="col-sm-4 col-md-3 col-xs-6 r-full-width"
                  key={index}
                >
                  <figure
                    className={`gallery-figure rotate-${R.modulo(index, 3)}`}
                  >
                    <img src={item.image} alt="" />
                    <figcaption className="overlay">
                      <h4 className="position-center-center">
                        <a href="gallery.html">{item.text}</a>
                      </h4>
                    </figcaption>
                  </figure>
                </div>
              ))(page.bottom_gallery)}
            </div>
          </div>
        </section>
        {/* /Gallery */}
      </main>
    )
  }
}

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
            mission {
              image
              text
              check_list {
                text
              }
            }
            testimonials {
              author
              quote
              title
            }
            bottom_gallery {
              image
              text
            }
          }
        }
      }
    }
  }
`
