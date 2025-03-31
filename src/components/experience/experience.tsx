import React from "react";
import { SrDeveloper } from "./srDeveloper";
import { Kinedu } from "./kinedu";
import { Airmedia } from "./airmedia";

export function Experience(){
    return (
        <section id="experience">
            <div className="m-2">
                <h1 className="text-2xl">Experiencia profesional</h1>
                <br></br>
                <SrDeveloper></SrDeveloper>
                <br></br>
                <Kinedu></Kinedu>
                <br></br>
                <Airmedia></Airmedia>
                <br></br>
            </div>
        </section>
    );
}