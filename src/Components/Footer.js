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
      
        <div className="flex items-center cursor-pointer" onClick={handleEmailClick}>
          <FaEnvelope size={24} className="mr-2" />
          <p className={`text-[#b54b9f] ${emailCopied ? 'text-green-500' : ''}`}>
            {emailCopied ? 'Copied!' : 'contact@saikanepal.com'}
          </p>
        </div>
        <div className="flex gap-2 justify-start md:w-[75%] my-3 cursor-pointer">

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
