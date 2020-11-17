import React from "react";
import Header from "./Header";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import "../Library/CSS/bootstrap.min.css";
import "../Library/CSS/Main.css";
import Specialities from "../Components/Specialities";
import Services from "../Components/Services";
import "../Library/line-awesome/css/line-awesome.css";

export default function Config() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Specialities />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
