import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add additional logic here, such as sending the form data to an API
  };

  return (
    <div className="w-full py-16    text-gray-300 px-4">
      <div className="max-w-[1240px]  gap-10 mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 text-lg whitespace-normal my-4">
          <h1 className="hover:bg-[#12372A]  md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-serif">
            Wanna get in touch with us?
          </h1>
          <p className=" hover:bg-[#12372A] "style={{ whiteSpace: 'pre-line' }}>
            We invite you to connect with us by filling out the form below.
            Whether you have questions, need more information, or are interested in our services, we're here to help.
            Our team is committed to providing timely responses, and we aim to get back to you within 24 hours.
          </p>
        </div>
        <div className="my-4">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <textarea
              className="p-3 flex w-full rounded-md text-black"
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
            >
              Submit
            </button>
          </form>
          <p>
            Your personal Data is secured with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
