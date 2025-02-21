import React from "react";
 

const Contact = () => {
  return (
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
  );
};

export default Contact;
