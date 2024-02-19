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
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Wanna get in touch with us?
          </h1>
          <p>Fill in the form below and we will get back to you.</p>
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
