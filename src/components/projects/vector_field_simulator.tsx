import React from "react";

export function VectorFieldSimulator() {
  return (
    <section id="simulator">
      Vector field simulator
      <p>
        Web application for simulating scenarios built with three-dimensional
        components that are protected by devices created by the research
        laboratory for protecting regions from atmospheric electrical
        discharges, and obtaining results that allow for informed
        decision-making.
      </p>
      <h2>Roles</h2>
      <p>
        The roles performed: analysis collaborator and developer. I worked
        collaboratively with the project leader.
      </p>
      <h2>Contribution</h2>
      <p>
        I contributed to the search, analysis, and implementation of
        technologies that best suited the development. The first step was to
        gather and analyze the collected requirements, then search for the
        technologies to create a comparative chart of their advantages and
        disadvantages, with the goal of presenting conclusions and proposals.
        After presenting the proposal, it was adapted according to the
        non-functional requirements. During the first phase, the design and
        initial coding of the web system began using <em>Python</em>,{" "}
        <em>Django</em>, and several libraries for data handling and report
        generation; <em>PostgreSQL</em> was used for data persistence. The
        frontend consisted of <em>HTML</em>, <em>CSS</em>, and <em>jQuery</em>.
        For the backend, a <em>RESTful API</em> was implemented using{" "}
        <em>Django Rest Framework</em>. It is worth mentioning that the
        scenarios were modeled in <em>Blender</em> with 3D objects, specifically
        those used for protection against electrical discharges, which were
        created in the research laboratory.
      </p>
    </section>
  );
}
