import React from "react";
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Kpop Top 100</strong> by{" "}
            <a href="https://github.com/Aikeh2021" rel="noreferrer noopener" target="_blank">Ashley I.</a> and {" "}
            <a href="https://github.com/MichaelEjike" rel="noreferrer noopener" target="_blank">Michael E.</a>.
            The website content is licensed{" "}
            <a href="https://fsf.org/" rel="noreferrer noopener" target="_blank">
            GNU AFFERO GENERAL PUBLIC LICENSE
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
