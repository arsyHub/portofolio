import Image from "next/image";
import React, { useState, useEffect } from "react";
export default function Home() {
  return (
    <>
      {/* navbar section */}
      <nav className="h-10 backdrop-blur-lg shadow-sm sticky top-0 z-50 container mx-auto px-5">
        <div className="flex  justify-between items-center mt-2">
          <div>
            <h1>Logo</h1>
          </div>
          <div>
            <button className="shadow-md text-[12px] bg-slate-600 hover:bg-[orange] text-white py-1 px-3 rounded-xl">Say Hi, 😎</button>
          </div>
        </div>
      </nav>
      {/* end navbar section */}

      <main className="container m-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10 px-5 md:px-28 lg:px-32">
          {/* Left section */}
          <div>
            <h1 className="text-sm md:text-lg">
              Hello👋, I am <span className=" text-[#11C5C6]">Arsy Berlian</span>
            </h1>

            <h1 className="font-semibold text-2xl md:text-3xl text-slate-700 my-2">
              Build a website <br /> with React as a frontend web developer
            </h1>

            <h1 className="text-[12px] md:text-sm text-slate-600 ">🌐 JavaScript | React | Next.js | Tailwind</h1>

            <button className="shadow-lg mt-10 mb-5 text-sm bg-[#11C5C6] hover:bg-[#0C9BAB] text-white py-2 px-4 rounded">Contact Me</button>
          </div>

          {/* Right section */}
          <div className="  m-auto md:m-0 relative">
            <div className="  -mx-[80px] md:-mx-[120px] my-[120px] flex gap-2 p-1  backdrop-blur-lg	border border-[#f7f7f7] rounded-sm absolute z-10">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                  <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                  <path
                    fill="#000001"
                    d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-[12px] font-semibold animate-pulse">JavaScript</h1>
                <p className="text-[10px] typewriter">
                  <span className="text-[#11C5C6]">const</span> myName <span className="text-yellow-500">=</span> &quot;Arsy Berlian&quot;
                </p>
              </div>
            </div>

            <Image src="/img/hero.png" alt="" className=" img w-[200px] md:w-[210px]" width={200} height={200} />
          </div>
        </div>
        {/* End Hero Section */}
      </main>
    </>
  );
}
