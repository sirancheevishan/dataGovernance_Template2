import React, { Component } from "react";
import SpecialitiesData from "../Library/Json/SpecialitiesData.json";

export default class Specialities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Specialities: SpecialitiesData,
    };
  }
  render() {
    return (
      <section id="Specialities" class="container mb-5">
        <div>
          <div class="section-title text-center">
            <h2> Our Specialities</h2>
            <div class="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="row">
            {this.state.Specialities.map((value) => (
              <div className="col-md-6">
                <div class="single-features">
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
