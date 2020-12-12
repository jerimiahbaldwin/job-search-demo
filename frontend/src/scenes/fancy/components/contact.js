import React from 'react';


export default function ContactUs(){
    return  (
        <section id="contact" className="contact section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Contact</h2>
            <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
          </div>

          <div className="row">

            <div className="col-lg-4">
              <div className="info d-flex flex-column justify-content-center" data-aos="fade-right">
                <div className="address">
                  <i className="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street,<br />New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

              </div>

            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">

              <form action="forms/contact.php" method="post" role="form" className="php-email-form" data-aos="fade-left">
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>

            </div>

          </div>

        </div>
      </section>

    )
}