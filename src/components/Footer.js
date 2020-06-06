import React from "react";
import github from "../images/github-logo.svg";
import tel from "../images/tel.svg";
import mail from "../images/mail.svg";
import "../styles/Footer.scss";

export const Footer = () => {
  return (
    <section className="footer">
      <p className="footer__author">
        &copy; {new Date().getFullYear()} Кварацхелия
      </p>
      <div className="footer__link-container">
        <a
          className="footer__link"
          href="https://github.com/MKvaratshelia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__github" src={github} alt="логотип github" />
        </a>
        <a
          className="footer__link"
          href="tel: +79818794065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__tel" src={tel} alt="логотип телефон" />
        </a>
        <a
          className="footer__link"
          href="mailto: kvaratsheliamihail@yandex.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__mail" src={mail} alt="логотип письмо" />
        </a>
      </div>
    </section>
  );
};
