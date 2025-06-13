import React from "react";
import "./Education.css";
import { education } from "../../data/portfolio";
import ReactMarkdown from "react-markdown";

const Education = () => {
  const { title, educations } = education;
  return (
    <section className="education" id="education">
      <h1>{title}</h1>
      <div className="education-container-grid">
        {educations.map((education, index) => (
          <article className="education-card" key={index}>
            <div className="degree-institution-duration-section">
              <h2 className="degree">
                {education.degree} - <span>{education.institution}</span>
              </h2>
              <p className="duration">{education.duration}</p>
            </div>
            <ReactMarkdown className="education-description">
              {education.description}
            </ReactMarkdown>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education; 