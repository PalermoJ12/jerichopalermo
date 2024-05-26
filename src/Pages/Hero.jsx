import React from "react";

import vector from "../assets/vector-art-jericho.png";
export default function Hero() {
  return (
    <div className=" flex items-center justify-center my-44">
      <div className="flex flex-row ">
        <div className="w-full  flex flex-col items-end justify-center gap-4 ">
          <h1
            className=" text-3xl font-poppins font-bold flex flex-col relative w-[max-content] 
before:absolute before:inset-0 before:bg-white
before:animate-typewriter"
          >
            Building my Future, <span> One Line of Code at a Time</span>
          </h1>
          <div className="w-2/3 flex items-end justify-end">
            <h4 className=" font-poppins font-semibold flex items-end">
              Hi, I'm Jericho Palermo, an aspiring full-stack developer
              passionate about creating seamless, dynamic web experiences. Let's
              innovate together.
            </h4>
          </div>
          <div className="border border-solid p-2 rounded-lg border-slate-700 hover:bg-slate-700 hover:text-white">
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1NdkOGFhQ64YMdXF6gVXhhtk-44kmvF5D/view"
                )
              }
            >
              Download Cv
            </button>
          </div>
        </div>
        <div className=" w-full flex justify-center rounded-md">
          <div className="w-1/2">
            <img
              src={vector}
              alt="vector"
              className=" rounded-full bg-slate-700 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
