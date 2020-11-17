import React, { Component } from "react";
import ServiceData from "../Library/Json/ServiceData.json";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Specialities: ServiceData,
    };
  }
  render() {
    return (
      <section id="Services" class="container mb-5">
        <div>
          <div class="section-title text-center">
            <h2> Our Services</h2>
            <div class="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="row">
            {this.state.Specialities.map((value) => (
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-services-box">
                  <div className={"icon " + value.Class}>
                    <i
                      className={value.icon + " feather feather--settings f-34"}
                    ></i>
                  </div>
                  <h3>
                    <a href="#">{value.Name}</a>
                  </h3>
                  <p>{value.Content}</p>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </section>
    );
  }
}
