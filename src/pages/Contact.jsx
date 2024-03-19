import React, { useState } from "react";
import lulu from "../Assests/lulu pic.jpeg";
import Footer from "../components/Footer"
const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log(formState);
  };

  return (
    <>
      <div
        className="contact wow fadeInUp pb-5"
        data-wow-delay="0.1s"
        id="contact"
      >
        <div
          className="container-fluid bg-cover bg-center"
          style={{
            backgroundImage: `url(${lulu})`
          
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2"></div>
              <div className="w-full md:w-1/2">
                <div className="contact-form bg-red-600 p-24">
                  <div id="success"></div>
                  <form
                    name="sentMessage"
                    id="contactForm"
                    novalidate="novalidate"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control w-full p-3 bg-transparent border-b border-white"
                        id="name"
                        placeholder="Your Name"
                        required="required"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control w-full p-3 bg-transparent border-b border-white"
                        id="email"
                        placeholder="Your Email"
                        required="required"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control w-full p-3 bg-transparent border-b border-white"
                        id="subject"
                        placeholder="Subject"
                        required="required"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        className="form-control w-full p-3 bg-transparent border-b border-white"
                        id="message"
                        placeholder="Message"
                        required="required"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div>
                      <button
                        className="btn bg-white text-red-600 px-4 py-2 mt-4"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <Footer />
      </div>
    </>
  );
};

export default ContactForm;
