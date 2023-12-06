import React from "react";
import brokeMan from "../assets/brokeman.png";
import codeUp from "../assets/codeup.png";
import hairLink from "../assets/hairlink.png";
import merniVal from "../assets/mernival.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
            style={{ backgroundImage: `url(${brokeMan})` }}
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://brokeman-game.surge.sh/index.html" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/notryancho/brokeMan" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
            style={{ backgroundImage: `url(${codeUp})` }}
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://code-up.vercel.app/register" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/fuentesdominic/CodeUp" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
            style={{ backgroundImage: `url(${hairLink})` }}
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://hairline.herokuapp.com" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/notryancho/HairLine" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
            style={{ backgroundImage: `url(${merniVal})` }}
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mernival.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jascolil01/Theme_Park_Project_A.J.R" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
