import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider/CustomSlider";
import CareerSlide from "./CustomSlider/CareerSlide";

const Career = () => {
  return (
    <div className="bg-[#EEEDEB] p-16">
      <p className="mb-3 text-[#F72798] font-bold p-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Job Openings
      </p>
      <div className="relative">
        <CustomSlider>
          <CareerSlide
            title="Web Developer Student Intern"
            header="Part time only 3 hours per day paid Internship"
            description="Are you a passionate student or recent graduate majoring in Computer Science, Software Engineering, Computer Engineering, or related fields? We're seeking talented individuals to join our team as a web developer Intern. This is a great opportunity to gain valuable hands-on experience and grow your skills in a dynamic work environment."
            src={
              "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            projectFlag={true}
            jobURL="https://forms.gle/dQN4REGfViXUzhYMA"
          />


          <CareerSlide
            title="Be a part of the team"
            header="Want to be part of the team?"
            description="If you have skills or ideas you believe could benefit our organization, don't hesitate to reach out. Email us at career@saikanepal.com"
            src={
              "https://media.istockphoto.com/id/876700200/fi/valokuva/liikemies-k%C3%A4ytt%C3%A4%C3%A4-digitaalista-riippulukkoa-suojatakseen.jpg?s=612x612&w=0&k=20&c=_cg9BLQsajMNp9H5MXZRtKH-P6-i3lH_GvmOt9r583E="
            }
            projectFlag={false}
            
          />
        </CustomSlider>
        <style>{`
          .slick-prev:before,
          .slick-next:before {
            color: black !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Career;
