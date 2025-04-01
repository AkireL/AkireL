import React from "react";

import { AboutMe } from "./experience/aboutme";
import { Experience } from "./experience/experience";
import { GitHubIcon } from "./icons/github";
import { LinkedIn } from "./icons/linkedIn";
import { Projects } from "./projects";

export function Profile() {
  return (
    <div>
      <div className="flex font-sans justify-between gap-4">
        <header className="py-15 pl-15 w-[30%]">
          <h1 className="text-[48px]">Erika L. Basurto</h1>
          <div className="text-sm mb-5">
            Full Stack Developer | Backend Developer | AI Integration
          </div>
          <div>
            <ul className="m-5 list-disc">
              <li>
                <a href="#about-me">About me</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-column gap-4">
            <a
              href="https://github.com/AkireL"
              target="_blank"
              className="flex flex-column gap-2 items-center"
            >
              <GitHubIcon></GitHubIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/erika-basurto/"
              target="_blank"
            >
              <LinkedIn></LinkedIn>
            </a>
          </div>
        </header>

        <main className="p-15 w-[70%]">
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Projects></Projects>
        </main>
      </div>
      <div className="bg-gray-100">
        <hr className="text-gray-300"></hr>
        <div className="px-12 p-5">© 2025 tailwindcss, react.js</div>
      </div>
    </div>
  );
}
