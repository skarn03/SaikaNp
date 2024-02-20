import React,{useState,useRef} from "react";
import Laptop from "../../assets/laptop.jpg";

const CustomSlide = ({
  title = "DATA ANALYTICS DASHBOARD",
  header = " Manage Data Analytics Centrally",
  description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
  molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
  autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
  ex deserunt fuga?`,
  src,
  projectFlag = false,
  projectUrl = "http://youtube.com",
 contactRef} ) => {
  const handleClick = () => {
    if (projectFlag) {
      window.open(projectUrl, "_blank");
    } else {
   
    }
  };
  const [nav, setNav] = useState(false);
  return (
    <div className=" text-black max-w-[1240px] mx-auto grid md:grid-cols-2">
      <img
        className="w-[500px] mx-auto my-4 rounded-md"
        src={src ? src : Laptop}
        alt="/"
      />
      <div className="flex flex-col justify-center">
        <p className="text-[#b54b9f] font-bold ">{title}</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          {header}
        </h1>
        <p className=" text-black">{description}</p>
    
        
      </div>
    </div>
  );
};

export default CustomSlide;
