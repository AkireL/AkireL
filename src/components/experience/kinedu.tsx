import React from "react";
import { Chips } from "../chips";

export function Kinedu() {
  return (
    <>
      <div className="m-1 p-5 rounded-lg hover:shadow-md">
        <h3 className="text-xl">
          Laravel Developer - Kinedu{" "}
          <span className="text-sm italic text-gray">
            (May 2021 - May 2022)
          </span>
        </h3>
        <ul className="m-5 list-disc">
          <li className="hover:bg-gray-50">
            Microservice development RESTFulAPIs(Laravel)
          </li>
          <li className="hover:bg-gray-50">
            Database design and modeling(MySQL)
          </li>
          <li className="hover:bg-gray-50">
            Support and improvement of webapplication modules(Laravel,Livewire
            and Alpine)
          </li>
          <li className="hover:bg-gray-50">
            Integration of payment service(Stripe)
          </li>
          <li className="hover:bg-gray-50">
            Creation of unit tests with PHPUnit
          </li>
        </ul>
        <ul className="flex flex-column gap-1">
          <Chips title="PHP"></Chips>
          <Chips title="Laravel"></Chips>
          <Chips title="Mysql"></Chips>
          <Chips title="PHPUnit"></Chips>
          <Chips title="Tailwindcss"></Chips>
          <Chips title="Javascript"></Chips>
          <Chips title="Alphine"></Chips>
          <Chips title="Liveware"></Chips>
        </ul>
      </div>
    </>
  );
}
