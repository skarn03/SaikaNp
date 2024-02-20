import React from "react";
import { useState } from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaEnvelope,
  FaDiscord
} from "react-icons/fa";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const handleEmailClick = () => {
    const emailAddress = 'contact@saikanepal.com';

    // Copy email address to clipboard
    navigator.clipboard.writeText(emailAddress)
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => console.error('Failed to copy email: ', error));

    // Open Gmail in a new tab
    window.open(`mailto:${emailAddress}`);
  };
  return (

    <div className=" max-w-[1240px] flex justify-center mx-auto py-16 px-4 lg:grid-cols-3 gap-8 text-gray-300">
      <div className=" text-lg">
        <h1 className="w-full text-3xl font-bold text-[#b54b9f]">Saika Nepal</h1>
        <p className= "hover:bg-[#12372A]  py-4">
          Small Scale : NPR 10,000 to 25,000 , comes with 45 days of free maintainance and feature Upgrades
        </p>

        <p className="hover:bg-[#12372A]  py-4">
          Mid Scale : NPR 30,000 to 45,000 , comes with 90 days of free maintainance and feature Upgrades
        </p>
        <p className="py-4 hover:bg-[#12372A] ">
          High Scale : NPR 50,000 + , comes with 150 days of free maintainance and feature Upgrades.
        </p>
        <p>
        Not sure where your project fits in? Contact us, and we can schedule a meeting to discuss further. 
        </p>
        <p>
        Rest assured, our pricing covers average costs, and depending on the project's complexity, 
        </p>
        <p>
        prices may be negotiable or require additional costs to meet specific demands. 
        </p>
        <p>
        Let's transform your digital landscape together.
        </p>
        <br></br>
        <div className="flex items-center cursor-pointer" onClick={handleEmailClick}>
          <FaEnvelope size={24} className="mr-2" />
          <p className={`text-[#b54b9f] ${emailCopied ? 'text-green-500' : ''}`}>
            {emailCopied ? 'Copied!' : 'contact@saikanepal.com'}
          </p>
        </div>
        <div className="flex justify-between md:w-[75%] my-6 cursor-pointer">

          <a href="https://www.instagram.com/saikanepal/" target="_blank">
            <FaInstagram size={30} />
          </a>
          <a href="https://discord.gg/bBMM3QEk43" target="_blank">
            <FaDiscord size={30} />
          </a>
        </div>
      </div>

    </div>
 

  );
};

export default Footer;
