import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Project(props) {
  const notify = () =>
    toast.error("Under construction please try again later.");
  return (
    <div>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body w-full  ">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col w-full mt-4">
              <div className="font-poppine text-2xl font-bold">
                {props.title}
              </div>
              <div className="mt-4 text-justify mr-2">{props.description}</div>
              <div className="mt-2 font-poppine text-l font-bold">
                Technology Used
              </div>
              <div className="flex flex-row mt-2">
                {props.technologies.map((tech) => (
                  <div
                    className="badge badge-lg font-poppins text-sm font-bold text-white bg-slate-700"
                    key={tech.id}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-row gap-6">
                <div
                  onClick={() =>
                    props.github ? window.open(props.github) : notify()
                  }
                  className="cursor-pointer flex items-center p-2 border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white font-poppins text-sm font-bold border border-solid"
                >
                  View Code
                  <ToastContainer />
                </div>
                <div className="cursor-pointer flex items-center p-2 border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white font-poppins text-sm font-bold border border-solid">
                  Live View
                </div>
              </div>
            </div>
            <div className=" flex justify-end w-full m-4 ">
              <img
                src={props.img}
                alt="dashboard"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
}

export default Project;
