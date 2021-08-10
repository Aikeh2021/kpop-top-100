import React from "react";
import '../Footer/Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Kpop Top 100</strong> by{" "}
            <Link to="https://github.com/Aikeh2021" rel="noreferrer noopener" target="_blank">Ashley</Link> and {" "}
            <Link to="https://github.com/MichaelEjike" rel="noreferrer noopener" target="_blank">Michael.</Link>
            The website content is licensed{" "}
            <Link to="https://fsf.org/" rel="noreferrer noopener" target="_blank">
            GNU AFFERO GENERAL PUBLIC LICENSE
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
