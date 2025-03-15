import React from "react";
import { Link } from "react-router-dom";
import linkedinIcon from "../image/linkedin-dark.svg";
import githubIcon from "../image/github-dark.svg";
import youtubeIcon from "../image/yt-dark.svg";
import instagramIcon from "../image/instagram.png";
import pluginImage from "../image/plugin.png";
import crudImage from "../image/CRUD.png";
import aspnetImage from "../image/crusaspnet.png";

const Study = () => {
    return (
        // main-comtemt
        <div className="study-page">
            <div className="main-con pt">


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
                 <div id="intro" className="p-5 text-center bg-light">
                    <h1 className="heading-primary">Hey, I'm Sunil Sahani</h1>
                    <div className="home-hero__info">
                        <p className="text-primary">
                            I am a <strong>Web Developer</strong> working on both <strong>front-end</strong> and <strong>back-end</strong> development in <strong>nopCommerce</strong>. I have experience in customizing <strong>nopCommerce plugins, developing themes, and implementing CRUD operations</strong>. My expertise includes <strong>ASP.NET Core, C#, Entity Framework, and SQL Server</strong>.
                        </p>
                        <p className="text-primary">
                            I am passionate about building <strong>scalable and efficient</strong> e-commerce solutions and continuously improving my skills in <strong>ASP.NET development</strong>.
                        </p>
                    </div>

                    <Link to="/" className="btn   m-2 study-bt"  >
                        View portfolio
                    </Link>
                    <Link className="btn   m-2 study-bt" href="#" target="_blank" role="button">
                        Download my resume
                    </Link>
                </div>
            </div>
            {/* ------- */}
            <main className="study-content">
                <div className="container">
                    {/* Section: Content */}
                    <section className="text-center">
                        <h4 className="mb-5">
                            <strong>Latest posts</strong>
                        </h4>

                        <div className="row">
                            {/* Card 1 */}
                            <div className="col-lg-4 col-md-12 mb-4">
                                <div className="card">
                                    <div className="bg-image hover-overlay">
                                        <img src={pluginImage} className="img-fluid" alt="Plugin" />
                                        <Link to="#">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Post title</h5>
                                        <p className="card-text">Create first nopcommerce plugin 4.70.0 for Beginner</p>
                                        <Link to="/firstplugin" className="btn btn-primary">Read</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <div className="bg-image hover-overlay">
                                        <img src={crudImage} className="img-fluid" alt="CRUD Plugin" />
                                        <Link to="#">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Post title</h5>
                                        <p className="card-text">How to create CRUD plugin in nopCommerce 4.60.0</p>
                                        <Link to="/crud-nopCommercer-4.60" className="btn btn-primary">Read</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col-lg-4 col-md-12 mb-4">
                                <div className="card">
                                    <div className="bg-image hover-overlay">
                                        <img src={aspnetImage} className="img-fluid" alt="ASP.NET CRUD" />
                                        <Link to="#">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Post title</h5>
                                        <p className="card-text">How to create Blog CRUD in ASP.NET Core with user</p>
                                        <Link to="/aspnet" className="btn btn-primary">Read</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Study;
