import React from "react";
import { Chips } from "../chips";

export function SrDeveloper() {
  return (
    <>
      <div className="m-1 p-5 rounded-lg hover:shadow-md">
        <h3 className="text-xl">
          Sr. Backend Developer - Cyberpuerta{" "}
          <span className="text-sm italic text-gray">
            (May 2022 - Dec 2024)
          </span>
        </h3>
        <ul className="m-5 list-disc">
          <li className="hover:bg-gray-50">
            Fine-tuned the DistilBERT model to classify reviews into specific
            business-related categories.
          </li>
          <li className="hover:bg-gray-50">
            Create an AI system to recommend personalized PC builds, simplifying
            the process for non-expert users, enhancing their experience and
            driving sales growth.
          </li>
          <li className="hover:bg-gray-50">
            Automate the review of product reviews, questions, responses and
            answers using OpenAI replacing the manual process and ensuring
            compliance with publishing policies.
          </li>
          <li className="hover:bg-gray-50">
            Design and develop a reusable frontend component library to ensure
            UI consistency and code reusability enhancing development efficiency
            and standardization across projects.
          </li>
          <li className="hover:bg-gray-50">
            Proposal and design of a strategy for migrating from a monolithic
            architecture to microservices, defining the foundational structure,
            developing new functionalities, and building a scalable and
            maintainable system.
          </li>
          <li className="hover:bg-gray-50">
            Maintain and refactor legacy code to improve performance, ensure
            compatibility with modern systems, and reduce technical debt.
          </li>
        </ul>
        <ul className="flex flex-wrap gap-1">
            <Chips title="PHP"></Chips>
            <Chips title="Laravel"></Chips>
            <Chips title="Vuejs"></Chips>
            <Chips title="JavaScript"></Chips>
            <Chips title="Typescript"></Chips>
            <Chips title="Microservices"></Chips>
            <Chips title="Vuetify"></Chips>
            <Chips title="Python"></Chips>
            <Chips title="Storybook"></Chips>
            <Chips title="Docker"></Chips>
            <Chips title="MySQL"></Chips>
            <Chips title="LLM"></Chips>
            <Chips title="Inertia"></Chips>
            <Chips title="Tailwindcss"></Chips>
        </ul>
      </div>
    </>
  );
}
