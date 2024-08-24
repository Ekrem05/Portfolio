import React, { useState } from "react";
import emailjs from "emailjs-com";
import { BiMessageDots } from "react-icons/bi";
const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wslt0lm", // Replace with your service ID
        "template_p7ax7ms", // Replace with your template ID
        formData,
        "f4GJUJLlndA3AspoC" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormStatus("Thank you for your message. It has been sent.");
          setFormData({
            email: "",
            name: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setFormStatus(
            "Oops! Something went wrong, and we couldn't send your message."
          );
        }
      );
  };

  return (
    <main className="mt-32 container max-w-full  px-2 sm:px-10 md:max-w-[800px] xl:max-w-[1200px]  2xl:max-w-[1524px]  m-auto text-secondaryText">
      <section className="sm:mt-64 flex flex-col gap-24">
        <header className="text-center sm:text-start sm:ml-32">
          <h3 className="text-5xl md:text-[80px] text-primaryText font-extrabold">
            Get in touch
          </h3>
          <h4 className="text-[1rem] md:text-2xl">
            Let’s build something awesome.
          </h4>
        </header>
        <hr className="bg-mutedGray w-full" />
      </section>

      <div className="flex w-full  justify-center text-primaryText">
        <div className=" w-full sm:w-4/5 mt-24 border border-base rounded-2xl bg-secondary">
          <header className="flex items-center relative justify-center  w-full">
            <h2 className="text-center text-lg py-4 ">New Message</h2>
          </header>

          <div class="h-[1px] w-full bg-mutedGray"></div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-5 sm:px-10 py-8 gap-4 caret-active"
          >
            <div className="flex gap-3 ">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent outline-none text-secondaryText placeholder-secondaryText"
              />
            </div>
            <div class="h-[1px] w-full bg-mutedGray"></div>
            <div className="flex gap-3 ">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent outline-none text-secondaryText placeholder-secondaryText"
              />
            </div>
            <div class="h-[1px] w-full bg-mutedGray"></div>
            <div className="flex gap-3 ">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-transparent outline-none text-secondaryText placeholder-secondaryText"
              />
            </div>
            <div class="h-[1px] w-full bg-mutedGray"></div>

            <textarea
              id="message"
              name="message"
              rows="5"
              required
              draggable="false"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              className="bg-base rounded-xl p-3 h-96 resize-none outline-none text-secondaryText placeholder-secondaryText"
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-active text-base px-10 py-2 rounded-xl text-secondaryText hover:text-primaryText"
              >
                Send
              </button>
            </div>
            {formStatus && <p className="text-center">{formStatus}</p>}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
