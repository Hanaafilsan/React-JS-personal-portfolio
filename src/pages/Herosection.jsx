import React from "react";
import { Link } from "react-scroll";

export default function HeroSection() {
  const closeMenu = () => {
    // Define the closeMenu function logic here
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Hana</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I am a passionate web developer with expertise in HTML, CSS, and JavaScript. <br/>
          With a deep understanding of design principles and a strong focus on user experience.
             
          </p>
        </div>
        <Link
          onClick={closeMenu} // Assuming you define the closeMenu function
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="footer"
          className="btn btn-primary
"
        >
       Hold me on Social Media
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}

