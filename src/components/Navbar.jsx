import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IoIosMail,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io";

export default function Navbar() {
  const navigate = useNavigate();
  const [selectedRoutes, setSelectedRoutes] = useState({
    Home: false,
    About: false,
    Contact: false,
    Projects: false,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar fixed top-0 left-0 w-full z-50 p-2 transition-colors duration-300 ${
          isScrolled ? "bg-slate-700 text-white" : ""
        }`}
      >
        <div className="flex justify-center w-full mr-4 ">
          <a href="/" className="text-xl font-poppins font-bold">
            JLP
          </a>
        </div>
        <div className="justify-center gap-2 p-2 mx-4 font-poppins w-full cursor-pointer">
          <a
            onClick={() => {
              navigate("/");
              setSelectedRoutes({
                ...selectedRoutes,
                Home: true,
                About: false,
                Contact: false,
                Projects: false,
              });
            }}
            className={`hover:bg-slate-700 hover:rounded-lg hover:text-white p-2 ${
              selectedRoutes.Home && "bg-slate-700 text-white rounded-lg"
            } ${
              isScrolled
                ? "hover:bg-white hover:rounded-lg hover:text-black"
                : ""
            }`}
          >
            Home
          </a>
          <a
            onClick={() => {
              navigate("/About");
              setSelectedRoutes({
                ...selectedRoutes,
                Home: false,
                About: true,
                Contact: false,
                Projects: false,
              });
            }}
            className={`hover:bg-slate-700 hover:rounded-lg hover:text-white p-2 ${
              selectedRoutes.About && "bg-slate-700 text-white rounded-lg"
            }  ${
              isScrolled
                ? "hover:bg-white hover:rounded-lg hover:text-black"
                : ""
            }`}
          >
            About
          </a>
          <a
            onClick={() => {
              navigate("/Projects");
              setSelectedRoutes({
                ...selectedRoutes,
                Home: false,
                About: false,
                Contact: false,
                Projects: true,
              });
            }}
            className={`hover:bg-slate-700 hover:rounded-lg hover:text-white p-2 ${
              selectedRoutes.Projects && "bg-slate-700 text-white rounded-lg"
            } ${
              isScrolled
                ? "hover:bg-white hover:rounded-lg hover:text-black"
                : ""
            }`}
          >
            Projects
          </a>
          <a
            onClick={() => {
              navigate("/Contact");
              setSelectedRoutes({
                ...selectedRoutes,
                Home: false,
                About: false,
                Contact: true,
                Projects: false,
              });
            }}
            className={`hover:bg-slate-700 hover:rounded-lg hover:text-white p-2 ${
              selectedRoutes.Contact && "bg-slate-700 text-white rounded-lg"
            } ${
              isScrolled
                ? "hover:bg-white hover:rounded-lg hover:text-black"
                : ""
            }`}
          >
            Contact
          </a>
        </div>
        <div className="w-full justify-center p-4 font-poppins flex gap-4">
          <a href="https://www.linkedin.com/in/jerichopalermo">
            {" "}
            <IoLogoLinkedin
              size={30}
              className={`hover:cursor-pointer ${
                isScrolled ? "hover:text-blue-600" : ""
              }`}
            />
          </a>
          <a href="https://www.facebook.com/YesItsEcho">
            {" "}
            <IoLogoFacebook
              size={30}
              className={`hover:cursor-pointer ${
                isScrolled ? "hover:text-blue-400" : ""
              }`}
            />
          </a>
          <a href="https://github.com/PalermoJ12">
            {" "}
            <IoLogoGithub
              size={30}
              className={`hover:cursor-pointer ${
                isScrolled ? "hover:text-slate-600" : ""
              }`}
            />
          </a>
        </div>
      </div>
    </>
  );
}
