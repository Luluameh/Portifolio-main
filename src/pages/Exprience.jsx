import React from "react";
import "../components/Exprience.css";
import { Banner } from "../components/banners/Banner";

const Experience = () => {
  // Sample data for demonstration. You can replace this with your actual data.
  const expect = [
    {
      date: "2045 - 2050",
      title: "Web Developer",
      company: "Soft Agency, San Francisco, CA",
      description:
        "Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.",
      direction: "left", // 'left' or 'right' for alternating timeline items
    },
    // Add more experiences as needed
    {
      date: "2045 - 2050",
      title: "Web Developer",
      company: "Soft Agency, San Francisco, CA",
      description:
        "Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.",
      direction: "right", // 'left' or 'right' for alternating timeline items
    },
    {
      date: "2045 - 2050",
      title: "Web Developer",
      company: "Soft Agency, San Francisco, CA",
      description:
        "Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.",
      direction: "left", // 'left' or 'right' for alternating timeline items
    },
  ];

  return (
    <>
      <div className=" md:px-20 w-full">
        <div className="container">
          <header className="section-header text-center">
            <div className="flex items-center justify-center gap-2 pb-2 ">
              {/* Horizontal Line */}
              <div className="w-12 h-1 bg-red-500"></div>

              {/* Dot */}
              <div className="w-1 h-1  bg-red-500"></div>
              <p className="font-semibold text-gray-400"> MY RESUME</p>
            </div>
            <h2 className="font-extrabold text-4xl text-gray-800 pb-12 ">
              Working Experience
            </h2>
          </header>
          <div className="experience" id="experience">
            <div className="container">
              <div className="timeline">
                {expect.map((expect, index) => (
                  <div
                    key={index}
                    className={`timeline-item ${expect.direction} wow slideIn${
                      expect.direction.charAt(0).toUpperCase() +
                      expect.direction.slice(1)
                    }`}
                    data-wow-delay="0.1s"
                  >
                    <div className="timeline-text">
                      <div className="timeline-date">{expect.date}</div>
                      <h2>{expect.title}</h2>
                      <h4>{expect.company}</h4>
                      <p>{expect.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**the First Banner */}
      <Banner />
    </>
  );
};

export default Experience;
