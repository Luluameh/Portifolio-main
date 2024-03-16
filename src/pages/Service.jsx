import { useState } from "react";
import "../index.scss";
import Exprience from './Exprience'
import { FaLaptop, FaLaptopCode, FaAndroid, FaApple } from "react-icons/fa";

const Service = () => {
  const [serviceId, setServiceId] = useState("");

  return (
    <>
      <div className="service scroll-smooth relative md:px-20 w-full py-12 md:py-16 gap-10 ">
        <div className="container mx-auto">
          <div
            className="section-header text-center mb-12 wow zoom-in"
            data-wow-delay="0.1s"
          >
        
            <div className="flex items-center justify-center gap-2 pb-2 ">
              {/* Horizontal Line */}
              <div className="w-12 h-1 bg-red-500"></div>

              {/* Dot */}
              <div className="w-1 h-1  bg-red-500"></div>
              <p className="font-semibold text-gray-400"> WHAT WE DO</p>
            </div>

            <h2 className="text-4xl md:text-4xl font-bold pb-3 text-gray-700">
              Awesome Quality Services
            </h2>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 wow fadeInUp "
            data-wow-delay="0.2s"
          >
            {services.map((service) => (
              <div
                onMouseOver={() => {
                  setServiceId(service.id);
                }}
                onMouseLeave={() => {
                  setServiceId("");
                }}
                key={service.id}
                className="button --move --left- service-item flex items-center relative hover:translate-x-4  hover:text-white transition-colors duration-300 ease-in-out"
              >
                <div className="service-icon flex items-center justify-center w-40 h-40 border border-red-600 bg-white mr-6 hover:text-white ">
                  <div
                    className={`${
                      serviceId === service.id &&
                      " transition-transform duration-[0.5s] transform scale-150 ease-in-out"
                    }`}
                  >
                    {service.icon}
                  </div>
                </div>

                <div className="service-text flex-1  text-gray-700 ">
                  <div
                    className={` ${
                      serviceId === service.id &&
                      "text-white transition-colors   duration-[0.5s] ease-in-out "
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/**here the calling of the exorience page */}
      <div id="exprience">
        <Exprience />
      </div>
    </>
  );
};

// Array of service items
const services = [
  {
    id: 1,
    icon: <FaLaptop size={60} className="text-red-500 text-3xl" />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non.",
  },
  {
    id: 2,
    icon: <FaLaptopCode size={60} className="text-red-500 text-3xl" />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non.",
  },
  {
    id: 3,
    icon: <FaAndroid size={60} className="text-red-500 text-3xl" />,
    title: "SEO optimizition",
    description:
      "Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non.",
  },
  {
    id: 4,
    icon: <FaApple size={60} className="text-red-500 text-3xl" />,
    title: "Apps Development",
    description:
      "Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non.",
  },
];

export default Service;
