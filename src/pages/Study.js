import React from "react";
import { Link } from "react-router-dom";

import pluginImage from "../image/plugin.png";
import crudImage from "../image/CRUD.png";
import aspnetImage from "../image/crusaspnet.png";

const Study = () => {
    return (
        // main-comtemt
        <div className="main-con pt">
        <div class="home-hero__socials"><div class="home-hero__social"><a href="http://linkedin.com/in/sunil-sahani-800875310/" target="_blank" rel="noreferrer"><img alt="Sunil Sahani LinkedIn Profile" class="home-hero__social-icon" src="/static/media/linkedin-dark.9ab1461c9a828786baf729f786e1c2f3.svg"></a></div><div class="home-hero__social"><a href="https://github.com/Sahani26" target="_blank" rel="noreferrer"><img alt="Sunil Sahani GitHub Profile" class="home-hero__social-icon" src="/static/media/github-dark.080591513b1a3eb8fdfe0257830eaff1.svg"></a></div><div class="home-hero__social"><a href="#" target="_blank" rel="noreferrer"><img alt="Sunil Sahani YouTube Profile" class="home-hero__social-icon" src="/static/media/yt-dark.693216f4a2bbb7256befff3132adbba2.svg"></a></div><div class="home-hero__social"><a href="https://www.instagram.com/sunil1626_/?hl=en" target="_blank" rel="noreferrer"><img alt="Sunil Sahani Instagram Profile" class="home-hero__social-icon" src="data:image/png;base64,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"></a></div></div>
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
           
                <Link to="/" className="btn btn-primary m-2"  >
                    View portfolio
                </Link>
                <Link className="btn btn-primary m-2" href="#" target="_blank" role="button">
                    Download my resume
                </Link>
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
