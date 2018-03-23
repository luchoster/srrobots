import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/imgs/logo_small.png'

const Navbar = () => (
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
            {/*<a className="addmissions-open" href="#"><i className="icon-star-full" />Addmissions Open</a>*/}
            <p>
              <span>Contact Us</span>(702) 514-0607, info@srrobots.com
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
              <li>
                <Link className="color-2" to="/gallery">
                  gallery
                </Link>
              </li>
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
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Navbar
