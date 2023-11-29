import Image from "next/image";
import React, { useState, useEffect } from "react";
export default function Home() {
  return (
    <main className="container m-auto ">
      {/* Hero Section */}
      <div className="flex justify-between mt-10 px-5 md:px-28 lg:px-32">
        <div>
          <h1 className="text-sm md:text-lg">👋Hello, I am</h1>
          <h1 className="font-semibold text-2xl md:text-3xl text-slate-700 my-2">ARSY BERLIAN ADNIN</h1>
          <h1 className="text-[12px] md:text-sm text-slate-600 font-semibold">Frontend Web Developer</h1>
          <button className="mt-10 bg-[#11C5C6] hover:bg-[#0C9BAB] text-white py-2 px-4 rounded">Hire Me</button>
        </div>

        <div className="rounded-full overflow-hidden ">
          <Image src="/img/hero.png" alt="" className="rounded-full img w-[200px] md:w-[210px]" width={200} height={200} />
        </div>
      </div>
      {/* End Hero Section */}
    </main>
  );
}
