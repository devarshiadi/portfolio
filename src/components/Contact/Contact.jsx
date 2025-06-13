import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { analytics, logEvent } from '../../config/firebase';
import "./Contact.css";

const Contact = () => {
  const handleContactClick = () => {
    // Track when users click the contact button
    logEvent(analytics, 'contact_click', {
      method: 'email'
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-me">
        <h1>
          <a 
            href="mailto:rushikeshmagdum79@gmail.com"
            onClick={handleContactClick}
          >
            Contact me
            <RiSendPlaneFill className="icon" size={30} />
          </a>
        </h1>
      </div>
    </section>
  );
};

export default Contact;
