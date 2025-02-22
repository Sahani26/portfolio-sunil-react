import React from "react";
import { Link } from "react-router-dom";
// import ContactUs from "./pages/ContactUs.js"; 

import linkedinIcon from "../image/linkedin-dark.svg";
import githubIcon from "../image/github-dark.svg";
import youtubeIcon from "../image/yt-dark.svg";
import instagramIcon from "../image/instagram.png";
import hlImage from "../image/hl.png";
import iRepairImage from "../image/i-repair.png";

const MainContent = () => {
  return (
    <>
      {/* Home Section */}
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">Hey, I'm Sunil Sahani</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              I am a <strong>Web Developer</strong> working on both <strong>front-end</strong> and <strong>back-end</strong> development in <strong>nopCommerce</strong>. 
              I have experience in customizing <strong>nopCommerce plugins, developing themes, and implementing CRUD operations</strong>. 
              My expertise includes <strong>ASP.NET Core, C#, Entity Framework, and SQL Server</strong>.
            </p>
            <p className="text-primary">
              I am passionate about building <strong>scalable and efficient</strong> e-commerce solutions and continuously improving my skills in <strong>ASP.NET development</strong>.
            </p>
          </div>
         <div className="main-page-bt">
         <div className="home-hero__cta">
            <Link to="/project" className="btn btn--bg">My Projects</Link>
          </div>
          <div className="home-hero__cta last-bt">
            <Link to="/#projects" className="btn btn--bg">Study Material</Link>
          </div>
         </div>
        </div>
        {/* Social Links */}
        <div className="home-hero__socials">
          {[{ link: "http://linkedin.com/in/sunil-sahani-800875310/", img: linkedinIcon, alt: "LinkedIn" },
            { link: "https://github.com/Sahani26", img: githubIcon, alt: "GitHub" },
            { link: "#", img: youtubeIcon, alt: "YouTube" },
            { link: "https://www.instagram.com/sunil1626_/?hl=en", img: instagramIcon, alt: "Instagram" },
          ].map((social, index) => (
            <div className="home-hero__social" key={index}>
              <a href={social.link} target="_blank" rel="noreferrer">
                <img src={social.img} alt={`Sunil Sahani ${social.alt} Profile`} className="home-hero__social-icon" />
              </a>
            </div>
          ))}
        </div>
      </section>
{/* about us */}
<section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                I'm a <strong>Web Developer</strong> building and managing the Front-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some of
                my work in the <strong>Projects</strong> section.
              </p>
              <p className="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong> contact</strong> me.
              </p>
              <p className="about__content-details-para">
                MATLAB Certification by <strong>IIT Kanpur (ICT)</strong>
              </p>
              <p className="about__content-details-para">
                <strong>Ranked 2nd</strong> in class during my graduation, demonstrating consistent academic excellence and a strong commitment to learning and problem-solving.
              </p>
            </div>
            <a href="#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {["HTML", "HTML5", "CSS", "Bootstrap", "CSS3", "JQUERY", "C#", ".NET Framework", ".NET Core", "ASP.NET MVC", "nopCommerce", "Nop"].map(skill => (
                <div className="skills__skill" key={skill}>{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Projects Section */}
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projects</span>
            <span className="heading-sec__sub">Here you will find client projects I have worked on.</span>
          </h2>

          <div className="projects__content">
            {[{ title: "House Labels", description: "HouseLabels.com is an e-commerce website specializing in thermal labels...", img: hlImage, link: "https://www.houselabels.com/" },
              { title: "i Repair Center", description: "iRepair-Centre.co.uk is a service-based e-commerce website specializing in smartphone...", img: iRepairImage, link: "https://irepair-centre.co.uk/" },
            ].map((project, index) => (
              <div className="projects__row" key={index}>
                <div className="projects__row-img-cont">
                  <img src={project.img} alt={project.title} className="projects__row-img" loading="lazy" />
                </div>
                <div className="projects__row-content">
                  <h3 className="projects__row-content-title">{project.title}</h3>
                  <p>{project.description}</p>
                  <a className="btn btn--med btn--theme dynamicBgClr" href={project.link} target="_blank" rel="noreferrer">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <ContactUs />   */}
      <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </span>
        </h2>
        <div className="contact__form-container">
          <p>Email: <a href="mailto:sunilsahani484@gmail.com">sunilsahani484@gmail.com</a></p>
          <p>Call: <a href="tel:+919695839080">+91 96958 39080</a></p>
        </div>
      </div>
    </section>
    </>
  );
};

export default MainContent;
