import React from "react";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects">
      <h1 className="text-2xl">Projects</h1>
      <ul>
        {projects.map((item, index) => (
          <li key={index} className="m-1 p-5 rounded-lg hover:shadow-md">
            <div className="flex flex-column gap-1">
              <div className="w-[20%]">
                <img src={item.img_main} />
              </div>
              <div className="w-[80%]">
                <h2 className="text-lg text-black hover:text-gray-500">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
