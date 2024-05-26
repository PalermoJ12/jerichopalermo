import React from "react";

import icon from "../assets/formal.png";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAxios,
  SiCsharp,
  SiComposer,
  SiDaisyui,
  SiExpress,
} from "react-icons/si";
import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaArrowRight,
  FaJs,
  FaPhp,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 w-full">
        <div className="w-1/2 font-poppins flex flex-col items-center mt-12">
          <span className=" text-4xl font-bold">
            Hello! I'm Jericho L. Palermo,
          </span>{" "}
          <span className="mt-4 text-center">
            {" "}
            My journey into the world of IT began in high school when I first
            fell in love with technology and became curious about how things
            work behind the scenes. This curiosity and passion led me to dream
            of becoming a full stack developer, which motivated me to pursue a
            Bachelor of Science in Information Technology at the University of
            Cabuyao.
          </span>
          <div className="">
            <img src={icon} alt="Me" className="  rounded-full w-40 mt-6" />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center w-full   ">
          <div className="text-2xl font-bold">Technologies</div>
          <div className="mt-10 w-1/4 flex flex-row gap-3 justify-center">
            <div className=" p-2 w-fit h-fit  border border-solid  rounded-lg border-slate-700 hover:bg-slate-800 hover:text-white">
              <FaReact
                size={60}
                className="text-cyan-600 cursor-pointer hover:text-white  "
                onClick={() => window.open("https://react.dev")}
              />
            </div>
            <div className=" p-2 w-fit h-fit  border border-solid  rounded-lg border-slate-700 hover:bg-slate-800 hover:text-white">
              <FaLaravel
                size={60}
                className=" text-red-600 cursor-pointer hover:text-white"
                onClick={() => window.open("https://laravel.com/")}
              />
            </div>
            <div className=" p-2 w-fit h-fit  border border-solid  rounded-lg border-slate-700 hover:bg-slate-800 hover:text-white">
              <SiExpress
                size={60}
                className=" cursor-pointer hover:text-white"
                onClick={() => window.open("https://expressjs.com/")}
              />
            </div>
            <div className=" p-2 w-fit h-fit  border border-solid  rounded-lg border-slate-700 hover:bg-slate-800 hover:text-white">
              <FaNodeJs
                size={60}
                className="text-green-600 cursor-pointer hover:text-white "
                onClick={() =>
                  window.open("https://laravel.com/https://nodejs.org/en")
                }
              />
            </div>
            <div className=" p-2 w-fit h-fit  border border-solid  rounded-lg border-slate-700 hover:bg-slate-800 hover:text-white">
              <FaGitAlt
                size={60}
                className="text-red-600 cursor-pointer hover:text-white"
                onClick={() => window.open("https://git-scm.com/")}
              />
            </div>
            <div className=" p-2 w-fit h-fit  border border-solid  rounded-lg border-slate-700 hover:bg-slate-800 hover:text-white">
              <FaGithub
                size={60}
                className="text-black  cursor-pointer hover:text-white"
                onClick={() => window.open("https://github.com/")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
