import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
      className="p-10 my-28"
    >
      <div className="footer flex justify-around">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover" href="/">
            Branding
          </a>
          <a className="link link-hover" href="/">
            Design
          </a>
          <a className="link link-hover" href="/">
            Marketing
          </a>
          <a className="link link-hover" href="/">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover" href="/">
            About us
          </a>
          <a className="link link-hover" href="/">
            Contact
          </a>
          <a className="link link-hover" href="/">
            Jobs
          </a>
          <a className="link link-hover" href="/">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover" href="/">
            Terms of use
          </a>
          <a className="link link-hover" href="/">
            Privacy policy
          </a>
          <a className="link link-hover" href="/">
            Cookie policy
          </a>
        </div>
      </div>
      <div className="my-10 text-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Doctors
          Portal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
