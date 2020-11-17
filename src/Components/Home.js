import React, { Component } from "react";
import HomeImg from "../Library/Images/Home.png";

export default class Home extends Component {
  render() {
    return (
      <section className="container mt-5 mb-5" id="Home">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-5">
            <div class="hero-content pd-t-17">
              <h1>Secure IT Solutions for a more secure environment</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
          <div className="col-md-6 offset-lg-1">
            <div className="banner-image">
              <img src={HomeImg} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
