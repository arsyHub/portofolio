import { Navbar } from "flowbite-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const projectItem = [
    {
      title: "Project title 1",
      image: "https://glints.com/id/lowongan/wp-content/uploads/2020/07/landbook.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Project title 2",
      image: "https://glints.com/id/lowongan/wp-content/uploads/2020/07/landbook.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Project title 3",
      image: "https://glints.com/id/lowongan/wp-content/uploads/2020/07/landbook.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      {/* navbar section */}
      <Navbar fluid={false} rounded={true} className="backdrop-blur-lg shadow-sm bg-[transparent] sticky top-0 z-50">
        <Navbar.Brand href="https://flowbite.com/">
          <img src="/img/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-slate-700 text-sm font-semibold dark:text-white">ArsyHub</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-[12px]">
          <Navbar.Link href="/navbars" active={false}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">Project</Navbar.Link>
          <Navbar.Link href="/navbars">Experience</Navbar.Link>
          <Navbar.Link href="/navbars">Education</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {/* end navbar section */}

      <main className="container m-auto  mt-10 px-5 md:px-1 lg:px-24">
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
            <div className=" -mx-[80px] md:-mx-[120px] my-[120px] flex gap-2 p-1  backdrop-blur-lg	border border-[#f7f7f7] rounded-sm absolute z-10">
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
        <div className="w-full h-[55px]  bg-gradient-to-t from-[azure] -mt-[40px] sticky" />
        {/* End Hero Section */}

        {/* Projec Section */}
        <div className="mt-[100px] ">
          <h1 className="text-3xl font-bold mb-10">
            💻 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#11C5C6] to-[#26C9FC]">Project</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projectItem.map((item, index) => {
              return (
                <div key={index} className=" w-[100%]  border border-[white] overflow-hidden rounded-sm py-5 px-3 group">
                  <div className="shadow-2xl relative rounded-lg overflow-hidden ">
                    <div className="relative ">
                      <img className="w-full h-[200px] lg:h-[250px] bg-" src={item.image} alt="" />
                      <div className="h-[55px] w-full  bg-gradient-to-t from-[azure] absolute -bottom-[10px] " />
                    </div>
                    <div className="absolute h-[70%] group-hover:bottom-0 ease-in-out duration-300 w-full  left-0 -bottom-[200px] p-4 bg-gradient-to-t from-[black] ">
                      <h1 className="text-[12px] font-semibold mb-1 text-[#fff]">{item.title}</h1>
                      <p className="text-white text-[12px] mb-5">{item.desc}</p>
                      <div className="flex gap-2 bottom-5 absolute">
                        <button className="bg-[#11C5C6] text-sm text-white px-3 h-[max-content] py-1 rounded">Visit</button>
                        <button className="border border-[#11C5C6] text-sm text-white px-3 h-[max-content] py-1 rounded">❤️ Love</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="bg-[#ffffff96] absolute w-full left-0 "></div> */}
        </div>
        {/* End Project Section */}
      </main>
    </>
  );
}
