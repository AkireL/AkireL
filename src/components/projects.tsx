import React from "react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

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
                  <div className="flex flex-column justify-between">
                  <div><h2 className="text-lg text-black hover:text-gray-500">{item.title} </h2></div>
                  <div>
                    <Link to={item.url_name}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                    </Link>
                  </div>
                  </div>
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
