import React from 'react'
import Hero from '../assets/imgs/inner-banners/img-08.jpg'

const ContactPage = () => (
  <React.Fragment>
    <div
      className="inner-banner contact text-center"
      style={{
        background: `url(${Hero}) center no-repeat`,
        left: '0px',
        right: ' 0px',
      }}
    >
      <div className="container">
        <div className="inner-heading">
          <h2>
            Reach us to us<br /> We’d love to hear from you
          </h2>
          <p>
            If its a non urgent issue then you could also email us, we’ll get
            back to you in 24 hours.
          </p>
        </div>
      </div>
    </div>
    <main id="main">
      {/* Contact */}
      <section className="contact-holder gray-bg tc-padding-bottom">
        <div className="container">
          <div className="row">
            {/* Content */}
            <div className="col-sm-8">
              <div className="content">
                {/* Form Heading */}
                <div className="form-heading">
                  <h5>Drop your Message here</h5>
                </div>
                {/* Form Heading */}

                {/* Form */}
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="comment-form contact"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Johnny Five"
                    />
                    <i className="icon-user-circle-o" />
                  </div>
                  <div className="form-group">
                    <label>Your Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="email@robots.com"
                    />
                    <i className="icon-envelope-o" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="123 456 789"
                    />
                    <i className="icon-phone2" />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="10"
                      name="message"
                      placeholder="Enter Message"
                    />
                  </div>
                  <div netlify-recaptcha="true" />
                  <button className="tc-btn full-with shadow-0">
                    Submit Message
                  </button>
                </form>
                {/* Form */}
              </div>
            </div>
            {/* Content */}

            {/* Aside */}
            <aside className="col-sm-4">
              <div className="address-figures tc-padding-top">
                <ul className="address-list style-2">
                  <li>
                    <span>Conatct Us</span>
                  </li>
                  <li>
                    <span>For Sales and Support</span>
                    <p>(702) 514-0607</p>
                  </li>
                  <li>
                    <span>Email Address</span>
                    <p>support@srrobots.com</p>
                  </li>
                </ul>
                <div className="tc-social-icons">
                  <ul>
                    <li>
                      <a
                        className="facebook"
                        href="https://facebook.com/groups/SrRobots"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="twitter"
                        href="https://twitter.com/sr_robots"
                        target="_blank"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
            {/* Aside */}
          </div>
        </div>
      </section>
    </main>
  </React.Fragment>
)

export default ContactPage
