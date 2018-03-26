import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import { createMarkup } from '../lib/helpers'

export const ProductPostTemplate = ({
  content,
  contentComponent,
  title,
  slug,
  sku,
  price,
  prod_image,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <main id="main">
      {helmet || ''}
      <div className="shop-detail-holder">
        {/* Full Prduct Detail */}
        <div className="product-detail gray-bg tc-padding">
          <div className="container">
            <div className="row">
              {/* Product Thumbnai */}
              <div className="col-lg-5 col-xs-12">
                <div className="thumbnail-slider">
                  <ul id="product-slides" className="product-slides">
                    <div aria-live="polite" className="draggable">
                      <div className="" role="listbox">
                        <li className="" aria-hidden="true" tabIndex="-1">
                          <img src={prod_image} alt="" />
                          <a
                            className="search-icon"
                            href="assets/images/product-thumbnail/img-04.jpg"
                            data-rel="prettyPhoto[product-slider]"
                            tabIndex="-1"
                            rel="prettyPhoto[product-slider]"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              {/* Product Thumbnai */}

              {/* Single Detail */}
              <div className="col-lg-7 col-xs-12">
                <div className="single-product-detail">
                  <h2>{title}</h2>
                  <div className="sale-nd-rete">
                    <div className="product-rate">Price: $ {price}</div>
                  </div>
                  {
                    // <div className="product-alerts after-clear">
                    //   <ul>
                    //     <li className="availibilty-lable">
                    //       <i className="icon-check-circle" />Availibilty:<span>
                    //         INSTOCK
                    //       </span>
                    //     </li>
                    //   </ul>
                    //   <span className="search-lable">
                    //     <i className="icon-star-full" />
                    //   </span>
                    // </div>
                  }
                  <p>
                    Ouch whimsical yikes after lantern confusedly like the dear
                    this more far slew crookedly at dove pithy and following
                    excluding held wolf egret the contrary goodness publicly
                    capital circa far desolately hello more much shoddily to
                    this and a maliciously beat and empirically jeepers heard
                    less one much rode froze honey hen that inside.
                  </p>
                  <div className="btn-nd-shares has-layout">
                    <a
                      href=""
                      className="tc-btn snipcart-add-item"
                      data-item-id={sku}
                      data-item-name={title}
                      data-item-price={price}
                      data-item-weight=".20"
                      data-item-image={prod_image}
                      data-item-url={`https://srrobots.netlify.com/_products/${slug}`}
                      data-item-description={title}
                    >
                      Add to Cart
                    </a>
                    {
                      // <ul className="share-btn btn-list">
                      //   <li>
                      //     <a className="tc-btn shadow-0 facebook" href="#">
                      //       <i className="icon-facebook-official" />Share on
                      //       Facebook
                      //     </a>
                      //   </li>
                      //   <li>
                      //     <a className="tc-btn shadow-0 twitter" href="#">
                      //       <i className="icon-twitter" />Share on Twitter
                      //     </a>
                      //   </li>
                      //   <li>
                      //     <a className="tc-btn shadow-0 plus" href="#">
                      //       +
                      //     </a>
                      //   </li>
                      // </ul>
                    }
                  </div>
                </div>
              </div>
              {/* Single Detail */}
            </div>
          </div>
        </div>
        {/* Full Prduct Detail */}

        {/* Description Nd Reviews */}
        <div className="description-nd-reviews tc-padding-bottom">
          <div className="green-wild-bg" />
          <div className="container">
            <div className="row">
              {/* Description Tabs */}
              <div className="col-lg-9 col-md-8 col-xs-12">
                <div className="description-tabs">
                  {/* Tabs Nav List */}
                  <ul className="nav detail-tabs-nav" role="tablist">
                    <li role="presentation" className="active">
                      <a href="#description" role="tab" data-toggle="tab">
                        Description
                      </a>
                    </li>
                    {
                      // <li role="presentation">
                      //   <a href="#reviews" role="tab" data-toggle="tab">
                      //     Reviews (0)
                      //   </a>
                      // </li>
                      // <li role="presentation">
                      //   <a href="#custom-tabs" role="tab" data-toggle="tab">
                      //     Custom Tabs
                      //   </a>
                      // </li>
                    }
                  </ul>
                  {/* Tabs Nav List */}

                  {/* Tabs Panels */}
                  <div className="tab-content detail-tabs-content">
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="description"
                    >
                      <div className="product-description">
                        <div className="text-article">
                          <div
                            dangerouslySetInnerHTML={createMarkup(content)}
                          />
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="reviews" />
                    <div role="tabpanel" className="tab-pane" id="custom">
                      3
                    </div>
                  </div>
                  {/* Tabs Panels */}
                </div>
              </div>
              {/* Description Tabs */}
            </div>
          </div>
        </div>
        {/* Description Nd Reviews */}
      </div>
    </main>
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
      prod_image={post.frontmatter.prod_image}
      price={post.frontmatter.price}
      sku={post.frontmatter.sku}
      slug={post.frontmatter.slug}
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
