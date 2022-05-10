import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import MainButton from "../Shared/MainButton";

const Appointment = () => {
  return (
    <section
      className="flex justify-center items-center pt-9"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-10">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white py-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          quibusdam soluta ipsum iure cum aliquid, eos asperiores nisi non ex
          molestias nesciunt distinctio corporis expedita fugiat repellendus
          quod dicta incidunt doloribus minus quae! Harum distinctio praesentium
          voluptatem eum, quaerat ullam?
        </p>
        <MainButton>Get Started</MainButton>
      </div>
    </section>
  );
};

export default Appointment;
