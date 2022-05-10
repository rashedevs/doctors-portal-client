import React from "react";
import appointment from "../../assets/images/appointment.png";
import MainButton from "../Shared/MainButton";

const Login = () => {
  return (
    <section
      className="flex justify-center items-center pt-9"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="flex items-center justify-center flex-col mx-auto flex-1 px-10">
        <h3 className="text-xl text-primary font-bold">Contact Us</h3>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
        <div className="flex flex-col mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            class="input input-bordered w-full max-w-xs my-2"
          />
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered w-full max-w-xs my-2"
          />
          <textarea
            class=" input input-bordered w-full max-w-xs my-2"
            placeholder="Your Message"
          ></textarea>
        </div>
        <MainButton>Submit</MainButton>
      </div>
    </section>
  );
};

export default Login;
