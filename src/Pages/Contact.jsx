import React from "react";

export default function Contact() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className=" lg:text-9xl font-bold text-gray-300 z-0">
        GET IN TOUCH
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="flex justify-between w-full px-8">
          <div className="card bg-white shadow-xl rounded-lg p-8 transform -rotate-45">
            <div className="card-body text-center">
              <div className="text-2xl font-bold mb-4">Jericho Palermo</div>
              <div className="text-xl mb-4">Fullstack Developer</div>
              <div className="text-lg mb-4">
                <a
                  href="mailto:palermojericho14@gmail.com"
                  className="hover:underline"
                >
                  palermojericho14@gmail.com
                </a>
              </div>
              <div className="text-lg">
                <a href="tel:+639451959211" className="hover:underline">
                  +63 945 195 9211
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-black text-white shadow-xl rounded-lg p-8 transform rotate-12">
            <div className="card-body text-center">
              <div className="text-2xl font-bold mb-4">Jericho Palermo</div>
              <div className="text-xl mb-4">Fullstack Developer</div>
              <div className="text-lg mb-4">
                <a
                  href="mailto:palermojericho14@gmail.com"
                  className="hover:underline"
                >
                  palermojericho14@gmail.com
                </a>
              </div>
              <div className="text-lg">
                <a href="tel:+639451959211" className="hover:underline">
                  +63 945 195 9211
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
