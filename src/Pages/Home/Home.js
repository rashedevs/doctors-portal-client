import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Contact from "./Contact";
import DentalBanner from "./DentalBanner";
import Footer from "../Shared/Footer";
import Info from "./Info";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalBanner></DentalBanner>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
