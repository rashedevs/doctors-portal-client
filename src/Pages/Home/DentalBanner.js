import React from "react";
import treatment from "../../assets/images/treatment.png";
import MainButton from "../Shared/MainButton";

const DentalBanner = () => {
  return (
    <div class="hero min-h-screen my-9">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          class="max-w-sm rounded-lg shadow-2xl mx-6"
          alt=""
        />
        <div class="px-6">
          <h1 class="text-5xl font-bold">
            4 Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <MainButton>Get Started</MainButton>
        </div>
      </div>
    </div>
  );
};

export default DentalBanner;
