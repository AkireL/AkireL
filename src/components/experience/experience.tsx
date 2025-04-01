import React from "react";
import { SrDeveloper } from "./srDeveloper";
import { Kinedu } from "./kinedu";
import { Airmedia } from "./airmedia";

export function Experience(){
    return (
        <section id="experience" className="scroll-mt-16">
            <div className="sticky m-2 w-full">
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