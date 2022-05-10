import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import DentalBanner from "./DentalBanner";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalBanner></DentalBanner>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
