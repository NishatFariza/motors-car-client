import React from "react";
import footerLogo from "../../../images/logo.png";

const Footer = () => {
  return (
    <footer className="shared-bg py-12">
      <div className="mx-auto container">
        <div className="w-3/12">
          <img className="w-3/12" src={footerLogo} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
