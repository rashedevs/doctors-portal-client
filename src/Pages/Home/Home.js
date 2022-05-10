import React from "react";
import Login from "../Login/Login";
import Appointment from "./Appointment";
import Banner from "./Banner";
import DentalBanner from "./DentalBanner";
import Info from "./Info";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalBanner></DentalBanner>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <Login></Login>
    </div>
  );
};

export default Home;
