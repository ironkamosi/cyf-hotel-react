import React from "react";

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
