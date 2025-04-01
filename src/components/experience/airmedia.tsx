import React from "react";
import { Chips } from "../chips";

export function Airmedia() {
    return (
    <>
    <div className="m-1 p-5 hover:bg-gray-50 rounded-lg hover:shadow-md">
        <h3 className="text-xl">Full-Stack - AIRmedia <span className="text-sm italic text-gray">(August 2020 - April 2021)</span></h3>
        <ul className="m-5 list-disc group">
            <li className="hover:bg-gray-50">Requirement gathering, analysis and design solution</li>
            <li className="hover:bg-gray-50">Wireframes design</li>
            <li className="hover:bg-gray-50">Database design and modeling (MySQL)</li>
            <li className="hover:bg-gray-50">API REST Development</li>
            <li className="hover:bg-gray-50">Integration with SOAP web services and REST API</li>
            <li className="hover:bg-gray-50">Development plugin Wordpress</li>
        </ul>
        <ul className="flex flex-column gap-1">
            <Chips title="PHP"></Chips>
            <Chips title="Laravel"></Chips>
            <Chips title="Codeigniter"></Chips>
            <Chips title="WordPress"></Chips>
            <Chips title="REST API"></Chips>
            <Chips title="MySQL"></Chips>
        </ul>
    </div>
    </>
)
}