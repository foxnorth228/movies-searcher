import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__container">
        <article className="footer__textBlock_first">
          <p>TermsPrivacyPolicy & Safety</p>
          <p>How YouTube works</p>
          <p>Test new features</p>
        </article>
        <article className="footer__textBlock_second">
          <p>About Press Copyright</p>
          <p>Contact us Creators</p>
          <p>Advertise Developers</p>
        </article>
        <article className="footer__icons">
          <i style={{ backgroundImage: "url('./icon-facebook.svg')" }}></i>
          <i style={{ backgroundImage: "url('./icon-twitter.svg')" }}></i>
          <i style={{ backgroundImage: "url('./icon-instagram.svg')" }}></i>
          <i style={{ backgroundImage: "url('./icon-linkedin.svg')" }}></i>
        </article>
      </section>
      <h2 className="footer__title">2023 Modsen company</h2>
    </footer>
  );
};

export default Footer;
