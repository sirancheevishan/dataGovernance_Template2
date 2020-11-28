import React from "react";

export default function Contact() {
  return (
    <section id="Contact" class="m-t7 mb-5">
      <div class="container">
        <div class="section-title text-center">
          <h2>Get In Touch With Us</h2>
          <div class="bar"></div>
          <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://www.pasona-vue.envytheme.com/img/1.74160cc2.png"
              alt="image"
            />
          </div>
          <div className="col-md-6 pt-5">
            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required="required"
                  data-error="Please enter your name"
                  placeholder="Name"
                  class="form-control"
                />
                <div class="help-block with-errors"></div>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required="required"
                  data-error="Please enter your email"
                  placeholder="Email"
                  class="form-control"
                />
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required="required"
                  data-error="Please enter your name"
                  placeholder="Phone"
                  class="form-control"
                />
                <div class="help-block with-errors"></div>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required="required"
                  data-error="Please enter your name"
                  placeholder="Subject"
                  class="form-control"
                />
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  required="required"
                  data-error="Write your message"
                  placeholder="Your Message"
                  class="form-control"
                ></textarea>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <button type="submit" class="btn btn-primary">
                Send Message
              </button>
              <div id="msgSubmit" class="h3 text-center hidden"></div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
