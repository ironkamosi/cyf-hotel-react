import React from "react";
import "./Footer.css";
const Footer = props => {
  return (
    <div className="footer-container">
      <ul>
        {props.footerInfo.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
