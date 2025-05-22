"use client";
//import { useState } from "react";

export default function About() {
  return (
    <div className="character-card shadow-2xl rounded-lg flex items-center justify-center w-full h-screen bg-center bg-cover opacity-80 text-white">
      <div className="relative flex justify-between w-11/12 max-w-12xl p-5 bg-black/60 rounded-lg">
        {/* Main character information */}
        <div className="flex-1 p-5 main-card">
          <h3 className="text-yellow-500 text-lg">S Rank</h3>
          <h1 className="text-3xl font-bold my-2">
            CHOI A.K.A
            <br />
            <span className="text-[#a7d0a9]">BAIZHU&lsquo;S MEDICINE</span>
          </h1>
          <p className="text-gray-300 leading-6 w-4/5">
            Choi Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry&lsquo;s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>

        {/* About section */}
        <aside className="flex-1 p-5 bg-white/10 rounded-lg text-right text-xl">
          <div className="flex flex-col items-end h-11/12 space-y-3 ">
            <a
              href="/About"
              className="cursor-pointer transition-all duration-500 hover:text-yellow-500 hover:text-2xl font-bold"
            >
              About
            </a>
            <a
              href="/About"
              className=" transition-all duration-500 hover:text-yellow-500 hover:text-2xl font-bold"
            >
              Affiliation
            </a>
            <a
              href="/About"
              className="cursor-pointer transition-all duration-500 hover:text-yellow-500 hover:text-2xl font-bold"
            >
              Status
            </a>
            <a
              href="/About"
              className="cursor-pointer transition-all duration-500 hover:text-yellow-500 hover:text-2xl font-bold"
            >
              Relationships
            </a>
            <a
              href="/About"
              className="cursor-pointer transition-all duration-500 hover:text-yellow-500 hover:text-2xl font-bold"
            >
              Skills
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
