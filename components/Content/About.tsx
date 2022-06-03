import React from "react";

const About = () => {
  const date = new Date().getFullYear() - 2021;
  return (
    <div>
      <div className="w-full text-center my-5">
        <h3 className="text-lightGreen text-3xl">About Me</h3>
      </div>
      <div className="w-2/3 mx-auto ">
        <p className="text-white md:leading-10 md:text-2xl w-full">
          Hey there my fellows my name is Shabani Nassibu living in Dar es
          Salaam Tanzania, I&apos;m a software developer with {date}{" "}
          {date === 1 ? "year" : "years"} of experience working with both the
          frontend and backend development for web and mobile applications
        </p>
      </div>
    </div>
  );
};

export default About;
