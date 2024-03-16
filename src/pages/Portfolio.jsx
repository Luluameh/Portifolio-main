import React, { useState } from "react";
//import lu from "../Assests/lu.png"
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter.replace(".", ""));
  };

  const portfolioItems = [
    {
      id: 1,
      category: "filter-1",
      title: "eCommerce Website",
      image:'',
    },
    {
      id: 2,
      category: "filter-2",
      title: "Product Landing Page",
      image: "Assests/lulu pic.jpeg",
    },
    {
      id: 3,
      category: "filter-3",
      title: "JavaScript quiz game",
      image: "Assests/profile.jpeg",
    },
    // Add more items as needed
  ];

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="portfolio relative p-12">
      <div className="container mx-auto">
        <div
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>My Portfolio</p>
          <h2 className="text-2xl font-bold">My Excellent Portfolio</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <ul id="portfolio-filter" className="flex justify-center">
              <li
                className={`cursor-pointer m-2 p-3 text-sm font-semibold ${
                  activeFilter === "*"
                    ? "text-red-500 bg-white border-red-500"
                    : "text-white bg-red-500 border-red-500"
                } border-2 rounded-none shadow-inner`}
                onClick={() => handleFilterClick("*")}
              >
                All
              </li>

              <li
                className={`cursor-pointer m-2 p-3 text-sm font-semibold ${
                  activeFilter === "filter-1"
                    ? "text-red-500 bg-white border-red-500"
                    : "text-white bg-red-500 border-red-500"
                } border-2 rounded-none shadow-inner`}
                onClick={() => handleFilterClick("filter-1")}
              >
                Web Design
              </li>
              <li
                className={`cursor-pointer m-2 p-3 text-sm font-semibold ${
                  activeFilter === "filter-2"
                    ? "text-red-500 bg-white border-red-500"
                    : "text-white bg-red-500 border-red-500"
                } border-2 rounded-none shadow-inner`}
                onClick={() => handleFilterClick("filter-2")}
              >
                Mobile Apps
              </li>
              <li
                className={`cursor-pointer m-2 p-3 text-sm font-semibold ${
                  activeFilter === "filter-3"
                    ? "text-red-500 bg-white border-red-500"
                    : "text-white bg-red-500 border-red-500"
                } border-2 rounded-none shadow-inner`}
                onClick={() => handleFilterClick("filter-3")}
              >
                Game Dev
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container ">
          {/**flex flex-wrap gap-6 justify-center */}
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${item.category} wow fadeInUp`}
              data-wow-delay="0.0s"
            >
              <div className="portfolio-wrap ">
                <div className="portfolio-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-text mt-2">
                  <h3>{item.title}</h3>
                  <a
                    className="btn border border-gray-300  py-2 px-4 mt-2 inline-block"
                    href={item.image}
                    data-lightbox="portfolio"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
