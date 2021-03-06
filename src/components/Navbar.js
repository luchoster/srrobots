import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'

import logo from '../assets/imgs/logo_small.png'

const Navbar = () => (
  <Headroom>
    <header id="header" className="header inner-header row d-none d-lg-flex">
      {
        <div className="top-bar col-sm-12">
          <div className="container">
            <div className="announcements">
              <p>
                <span />
              </p>
            </div>

            <div className="topbar-address">
              <a href="#" className="snipcart-user-logout logout">
                Logout
              </a>
              <a className="my-account snipcart-user-profile" href="#">
                <i className="fa fa-star" />{' '}
                <span className="snipcart-user-email">My Account</span>
              </a>
              <p>
                <span>Contact Us</span>(702) 514-0607 |{' '}
                <Link to="/contact">support@srrobots.com</Link>
              </p>
            </div>
          </div>
        </div>
      }

      <div className="nav-holder col">
        <div className="container">
          <div className="p-relative has-layout">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            <nav className="navigation">
              <a className="toggleMenu" href="#menu">
                <i className="icon-navicon" />
              </a>
              <ul className="nav-list">
                <li>
                  <Link className="color-1" to="/">
                    home
                  </Link>
                </li>
                {/*<li>
									<a className="color-3" href="classes.html">classes</a>
									<ul>
										<li><a href="classes.html">classes</a></li>
										<li><a href="classes-2.html">classes 2</a></li>
										<li><a href="classes-detail.html">classes Detail</a></li>
									</ul>
								</li>
								<li className="active">
									<a className="color-4" href="blog.html">blogs</a>
									<ul>
										<li><a href="blog.html">blog</a></li>
										<li><a href="blog-detail.html">blog Detail</a></li>
										<li><a href="blog-detail2.html">blog Detail 2</a></li>
									</ul>
								</li>
                <li><a className="color-5" href="teams.html">teachers</a></li>*/}
                <li>
                  <Link className="color-4" to="/shop">
                    shop
                  </Link>
                </li>
                <li>
                  <Link className="color-3" to="/about">
                    about us
                  </Link>
                </li>
                {
                  // <li>
                  //   <Link className="color-2" to="/gallery">
                  //     gallery
                  //   </Link>
                  // </li>
                }
                {/*<li>
									<a className="color-2" href="#">pages</a>
									<ul>
										<li><a href="about.html">about us</a></li>
										<li><a href="gallery.html">gallery</a></li>
										<li><a className="color-6" href="sceduled-events.html">timetable</a></li>
									</ul>
                </li>*/}
                <li>
                  <Link className="color-7" to="/contact">
                    contact us
                  </Link>
                </li>
                <li>
                  <Link to="" className="snipcart-checkout cart color-4">
                    <div className="snipcart-summary">
                      <i className="fa fa-shopping-cart" />
                      <span className="snipcart-total-items qty" />
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </Headroom>
)

export default Navbar
