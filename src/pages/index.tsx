import { Navbar } from "flowbite-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      {/* navbar section */}
      <Navbar fluid={false} rounded={true} className="backdrop-blur-lg shadow-sm bg-[transparent] sticky top-0 z-50">
        <Navbar.Brand href="https://flowbite.com/">
          <img src="/img/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-slate-700 text-sm font-semibold dark:text-white">ArsyHub</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-[12px]">
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">Project</Navbar.Link>
          <Navbar.Link href="/navbars">Experience</Navbar.Link>
          <Navbar.Link href="/navbars">Education</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {/* end navbar section */}

      <main className="container m-auto h-[1000px] mt-10 px-5 md:px-1 lg:px-32">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:justify-between  ">
          {/* Left section */}
          <div>
            <h1 className="text-sm md:text-lg">
              Hello👋, I am <span className=" text-[#11C5C6]">Arsy Berlian</span>
            </h1>

            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-slate-700 my-2">
              Build a website <br /> with React as a frontend web <br /> <span className="text-[orange]">developer</span>
            </h1>

            <h1 className="text-[12px] md:text-sm text-slate-600 ">🌐 JavaScript | React | Next.js | Tailwind</h1>

            <button className="shadow-lg mt-10 mb-5 text-sm bg-[#11C5C6] hover:bg-[#0C9BAB] text-white py-2 px-4 rounded">Contact Me</button>
          </div>

          {/* Right section */}
          <div className="  m-auto md:m-0 relative">
            <div className="animate-bounce  -mx-[80px] md:-mx-[120px] my-[120px] flex gap-2 p-1  backdrop-blur-lg	border border-[#f7f7f7] rounded-sm absolute z-10">
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
                <h1 className="text-[12px] font-semibold ">JavaScript</h1>
                <p className="text-[10px] typewriter">
                  <span className="text-[#11C5C6]">const</span> myName <span className="text-yellow-500">=</span> &quot;Arsy Berlian&quot;
                </p>
              </div>
            </div>

            <Image src="/img/hero.png" alt="" className=" img w-[200px] md:w-[210px] lg:w-[220px] " width={200} height={200} />
          </div>
        </div>
        {/* End Hero Section */}

        {/* Projec Section */}

        <div className="bg-[#ffffff96] absolute w-full left-0 ">
          <div className=" p-5">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-slate-700 my-2">Projects</h1>
          </div>
          <div className="p-5 relative flex gap-2 md:justify-around justify-center  flex-wrap">
            {/* Card item */}
            <div className="md:w-[320px]  p-2 backdrop-blur-3xl border  border-slate-300 rounded-lg shadow-lg">
              <div className="flex  gap-2 items-center mb-3">
                <img src="/img/logo.png" alt="" className="w-[30px] h-[30px] " />
                <div>
                  <h1 className="text-sm font-semibold">arsy</h1>
                  <p className="text-[12px]">post: 1 des 2023</p>
                </div>
              </div>
              <img src="https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1 className="text-xl mt-2 text-slate-600 font-semibold">Sistem Website Sekolah</h1>
              <p className="mt-3 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, minus.</p>
              <br />
              <hr />
              <button className=" bg-[#11C5C6] text-white p-2 rounded-lg mt-3 px-10 shadow-md"> Visit</button>
            </div>

            <div className="md:w-[320px]  p-2 backdrop-blur-3xl border  border-slate-300 rounded-lg shadow-lg">
              <div className="flex  gap-2 items-center mb-3">
                <img src="/img/logo.png" alt="" className="w-[30px] h-[30px] " />
                <div>
                  <h1 className="text-sm font-semibold">arsy</h1>
                  <p className="text-[12px]">post: 1 des 2023</p>
                </div>
              </div>
              <img src="https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1 className="text-xl mt-2 text-slate-600 font-semibold">Sistem Website Sekolah</h1>
              <p className="mt-3 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, minus.</p>
              <br />
              <hr />
              <button className=" bg-[#11C5C6] text-white p-2 rounded-lg mt-3 px-10 shadow-md"> Visit</button>
            </div>

            <div className="md:w-[320px]  p-2 backdrop-blur-3xl border  border-slate-300 rounded-lg shadow-lg">
              <div className="flex  gap-2 items-center mb-3">
                <img src="/img/logo.png" alt="" className="w-[30px] h-[30px] " />
                <div>
                  <h1 className="text-sm font-semibold">arsy</h1>
                  <p className="text-[12px]">post: 1 des 2023</p>
                </div>
              </div>
              <img src="https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1 className="text-xl mt-2 text-slate-600 font-semibold">Sistem Website Sekolah</h1>
              <p className="mt-3 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, minus.</p>
              <br />
              <hr />
              <button className=" bg-[#11C5C6] text-white p-2 rounded-lg mt-3 px-10 shadow-md"> Visit</button>
            </div>
            {/* End card */}
          </div>
        </div>
        {/* End Project Section */}
      </main>
    </>
  );
}
