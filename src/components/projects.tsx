import { projects } from "../data/projects";
import Project from "./project";
import { useState } from 'react'

export function Projects() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);
  
  function onShow(index: number) {
    setOpen(true);
    setId(index);
  }

  function clear() {
    setOpen(false);
    setId(null);
  }

  return (
    <section id="projects">
      <h1 className="text-2xl">Projects</h1>
      <ul>
        {projects.map((item, index) => (
          <li key={index} className="m-1 p-5 rounded-lg hover:shadow-md hover:cursor-pointer" onClick={() => onShow(index)}>
            <div className="flex flex-column gap-1">
              <div className="w-[20%]">
                <img src={item.img_main} />
              </div>
              <div className="w-[80%]">
                  <div className="flex flex-column justify-between">
                  <div><h2 className="text-lg text-black hover:text-gray-500">{item.title} </h2></div>
                  </div>
                <p className="mt-2 text-sm leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {
        open && id !== null && (
          <Project id={id} fnClear={clear}></Project>
        )
      }
    </section>
  );
}
