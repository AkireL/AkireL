import { AboutMe } from "./experience/aboutme";
import { Experience } from "./experience/experience";
import { GitHubIcon } from "./icons/github";
import { LinkedIn } from "./icons/linkedIn";
import { Projects } from "./projects";

export function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex lg:flex-row md:flex-col font-sans justify-between gap-4">
        <header className="pt-15 pl-15 lg:w-[30%]">
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

        <main className="px-15 lg:pt-15 lg:w-[70%] h-[90vh] lg:overflow-y-auto">
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Projects></Projects>
        </main>
      </div>
      <div className="bg-gray-100 mt-auto">
        <div className="px-12 p-5">© 2025 tailwindcss, react.js</div>
      </div>
    </div>
  );
}
