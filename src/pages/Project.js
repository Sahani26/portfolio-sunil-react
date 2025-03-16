import React from "react";
 

import hlImage from "../image/hl.png";
import iRepairImage from "../image/i-repair.png";
import homeHealthImage from "../image/home-health.png";
import italiyaImage from "../image/italiya.png";
import redseller from "../image/redseller.png"

const projects = [
  {
    title: "House Labels",
    description:
      "HouseLabels.com is an e-commerce website specializing in thermal labels, ribbons, and printing accessories. Built with a clean and structured UI, it features a well-organized product catalog with filtering and sorting options. The site likely integrates a shopping cart, user authentication, and payment gateway for seamless transactions.",
    imgSrc: hlImage,
    link: "https://www.houselabels.com/",
  },
  {
    title: "i Repair Center",
    description:
      "iRepair-Centre.co.uk is a service-based e-commerce website specializing in smartphone, tablet, and laptop repairs. It features an intuitive UI with a structured layout for booking repair services and browsing accessories. The site likely includes user authentication, appointment scheduling, and a secure payment gateway.",
    imgSrc: iRepairImage,
    link: "https://irepair-centre.co.uk/",
  },
  {
    title: "Home Health Care Shoppe",
    description:
      "HomeHealthCareShoppe.com is an e-commerce website specializing in medical supplies, mobility aids, and wellness products. It features a structured product catalog with filtering, search functionality, and a secure checkout system. The site likely integrates user authentication, order tracking, and multiple payment options.",
    imgSrc: homeHealthImage,
    link: "https://www.homehealthcareshoppe.com/",
  },
  {
    title: "ITALIYA CANCER CARE",
    description:
      "DrHareshItaliya.com is a personal or professional website, likely dedicated to Dr. Haresh Italiya’s medical practice or expertise. The site features a simple and informative layout, providing details about services, qualifications, and contact information. It may include appointment booking, patient testimonials, and a blog for health-related insights.",
    imgSrc: italiyaImage,
    link: "http://drhareshitaliya.com/",
  },
  {
    title: "RedSeller",
    description:
      "Redseller is a unique platform that specializes in showcasing a wide range of gadgets such as refurbished laptops, desktops, printers, and graphic cards. Whether you are a super stockiest looking to attract customers from all over India or a local dealer seeking the best rates for products in your locality, Red Seller has got you covered. With thousands of ads listed on our platform, we provide a convenient and efficient way for both buyers and sellers to connect and transact.",
    imgSrc: redseller,
    link: "https://redseller.in/",
  },
];

const Project = () => {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <div className="projects__content">
          {projects.map((project, index) => (
            <div className="projects__row" key={index}>
              <div className="projects__row-img-cont">
                <img
                  src={project.imgSrc}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className="btn btn--med btn--theme dynamicBgClr"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link Here
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
