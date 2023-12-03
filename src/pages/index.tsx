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

  const experienceItem = [
    {
      year: "2023",
      status: "Staff IT",
      title: "Frontend Web Developer at ",
      companyName: "Future Gate High School",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam quas excepturi numquam doloremque. Odio, dolor, eius excepturi deserunt quidem vel iusto mollitia architecto maxime quis vero unde quam dolore.",
    },
    {
      year: "2023",
      status: "Bootcamp",
      title: "Learn to Create Web Applications with React in ",
      companyName: "Dicoding",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam quas excepturi numquam doloremque. Odio, dolor, eius excepturi deserunt quidem vel iusto mollitia architecto maxime quis vero unde quam dolore.",
    },
    {
      year: "2023",
      status: "Bootcamp",
      title: "Learn to Create Backend Applications for Beginners in ",
      companyName: "Dicoding",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam quas excepturi numquam doloremque. Odio, dolor, eius excepturi deserunt quidem vel iusto mollitia architecto maxime quis vero unde quam dolore.",
    },
    {
      year: "2021",
      status: "Internship Student",
      title: "Frontend Web Developer at",
      companyName: "PT. Microdata Indonesia",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam quas excepturi numquam doloremque. Odio, dolor, eius excepturi deserunt quidem vel iusto mollitia architecto maxime quis vero unde quam dolore.",
    },
  ];

  return (
    <>
      {/* navbar section */}
      <Navbar fluid={false} rounded={true} className="backdrop-blur-lg shadow-sm bg-[transparent] sticky top-0 z-50">
        <Navbar.Brand href="https://flowbite.com/">
          <img src="/img/logo.png" className="mr-3 ml-1 h-6 sm:h-9" alt="Logo" />
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

      <main className="container m-auto  mt-10 px-5 md:px-1 lg:px-24 relative">
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
            <div className="hover:scale-105 hover:cursor-pointer ease-in-out duration-300 -mx-[65px] md:-mx-[120px] my-[150px] flex gap-2 px-2 py-3  backdrop-blur-lg	border border-[#f7f7f7] rounded-lg absolute z-10">
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

            <div className="hover:scale-105 hover:cursor-pointer ease-in-out duration-300  md:mx-[60px] lg:mx-[180px] mx-[160px]  my-[260px] flex gap-2 p-3 rounded-md w-[max-content] shadow-lg bg-slate-100 absolute z-10">
              <h1 className="text-[12px] font-semibold ">🌐 Web Development</h1>
            </div>

            <Image src="/img/hero.png" alt="" className=" img w-[250px] md:w-[210px] lg:w-[250px] " width={200} height={200} />
          </div>
        </div>
        <div className="w-full h-[55px]  bg-gradient-to-t from-[azure] -mt-[40px] sticky" />
        {/* End Hero Section */}

        {/* Projec Section */}
        <div className="mt-[100px] ">
          <h1 className="text-3xl font-bold mb-2">
            💻 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#11C5C6] to-[#26C9FC]">My Project</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4   overflow-y-hidden">
            {projectItem.map((item, index) => {
              return (
                <div key={index} className="w-[100%]  border border-[white] overflow-hidden rounded-sm py-5 px-3 group">
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
        </div>
        {/* End Project Section */}

        {/* Experience Section */}
        <div className="mt-[100px] ml-3">
          <h1 className="text-3xl font-bold mb-10 -ml-3">
            🧑‍💻 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#11C5C6] to-[#26C9FC]">Experiences</span>
          </h1>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {experienceItem.map((item, index) => {
              return (
                <li key={index} className="mb-10 ms-6">
                  <span className=" absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <img className="rounded-full shadow-lg" src="/img/logo.png" alt="Thomas Lean image" />
                  </span>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                    <span className="hidden md:inline text-[12px] text-[#11cde5] border border-[#11cde5] px-2 py-1 rounded-md ">{item.status}</span>
                    <div className="items-center justify-between mb-3 sm:flex">
                      <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{item.year}</time>
                      <br className="md:hidden" />
                      <span className="md:hidden  text-[12px] text-[#11cde5] border border-[#11cde5] px-2 py-1 rounded-md ">{item.status}</span>

                      <div className="mt-1 text-sm font-normal text-gray-500 lex dark:text-gray-300">
                        {item.title}{" "}
                        <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">
                          {item.companyName}
                        </a>
                      </div>
                    </div>
                    <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{item.desc}</div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* End Experience Section */}
      </main>

      {/* footer */}

      <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-[100px] bg-[#ffffff7c]">
        <div>
          <div>
            <h1 className="text-center text-[#11C5C6] font-thin text-2xl">Let&apos;s keep in touch!</h1>
            <p className="text-center ">Find me on social media</p>
            <div className="flex justify-center gap-2 mt-3 mb-[50px]">
              <a className="flex justify-center items-center w-[50px] h-[50px] bg-[azure] rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </a>
              <a className="flex justify-center items-center w-[50px] h-[50px] bg-[azure] rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a className="flex justify-center  items-center w-[50px] h-[50px] bg-[azure] rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
            </div>
          </div>
          <hr />
          <h1 className="mt-1 text-center font-semibold text-[12px] ">Made with ❤️ by Arsy Berlian - 2023</h1>
        </div>
      </footer>

      {/* End footer */}
    </>
  );
}
