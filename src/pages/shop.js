import React from 'react'
import Link from 'gatsby-link'
import { mapIndexed } from '../lib/helpers'
import Hero from '../assets/imgs/inner-banners/img-04.jpg'

export default class ShopPageTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const products = posts.filter(
      post => post.node.frontmatter.templateKey === 'product-details'
    )
    return (
      <React.Fragment>
        <div
          className="inner-banner shop-grid"
          data-enllax-ratio="-.3"
          style={{
            background: `url(${Hero}) center 51px no-repeat fixed`,
            left: '0px',
            right: '0px',
          }}
        >
          <div className="container">
            <div className="inner-heading">
              {
                //<span className="discount-batch" />
              }
              <h2>The Señor Robots Shop</h2>
            </div>
          </div>
        </div>
        <main id="main">
          {/* Products Grids */}
          <section className="shop-grid tc-padding">
            <div className="">
              {/* Products Grid */}
              <div className="custom-border">
                <div className="row no-gutters">
                  {/* Shop Grid Column */}
                  {mapIndexed((item, index) => (
                    <div
                      className="col-lg-4 col-12 col-md-6 r-full-width"
                      key={index}
                    >
                      <div className="shop-grid-column">
                        <figure>
                          <img src={item.node.frontmatter.prod_image} alt="" />
                          <div className="overlay">
                            <a
                              href=""
                              className="tc-btn snipcart-add-item position-center-center"
                              data-item-id={item.node.frontmatter.sku}
                              data-item-name={item.node.frontmatter.title}
                              data-item-price={item.node.frontmatter.price}
                              data-item-weight=".20"
                              data-item-image={item.node.frontmatter.prod_image}
                              data-item-url={`https://srrobots.netlify.com/_products/${
                                item.node.frontmatter.slug
                              }`}
                              data-item-description={
                                item.node.frontmatter.title
                              }
                            >
                              Add to Cart
                            </a>
                          </div>
                        </figure>
                        <Link to={`/_products/${item.node.frontmatter.slug}`}>
                          <div className="detail">
                            <h3>{item.node.frontmatter.title}</h3>

                            <div className="product-rate">
                              $ {item.node.frontmatter.price}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))(products)}
                  {/* Shop Grid Column */}
                </div>
              </div>
              {/* Products Grid */}
            </div>
          </section>
          {/* Products */}
        </main>
      </React.Fragment>
    )
  }
}

export const ProdQuery = graphql`
  query ProdQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___sku] }) {
      edges {
        node {
          html
          frontmatter {
            price
            prod_image
            slug
            sku
            templateKey
            title
          }
        }
      }
    }
  }
`
