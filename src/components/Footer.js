import React from 'react'

const Footer = () => (
  <footer id="footer" className="footer has-layout">
    <div className="footer-bg">
      <div className="container">
        <div className="sub-footer">
          <div className="tc-social-icons">
            <ul>
              <li>
                <a
                  target="_blank"
                  className="facebook"
                  href="https://facebook.com/groups/SrRobots"
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="twitter"
                  href="https://twitter.com/sr_robots"
                >
                  <i className="fa fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
          <p>
            &copy; Copyright {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
