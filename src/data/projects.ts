export const projects = [
  {
    title: "Vector field simulator",
    img_main: "images/portfolio/simulador.png",
    description:
      "Web application for simulating scenarios built with three-dimensional components that are protected by devices created by the research laboratory for protecting regions from atmospheric electrical discharges, and obtaining results that allow for informed decision-making.",
    url_name: "simulator",
    roles:
      "The roles performed: analysis collaborator and developer. I worked collaboratively with the project leader.",
    technologies: {
      description: "",
      frontend: ["HTML", "CSS", "jQuery"],
      backend: [
        "Python",
        "Django",
        "PostgreSQL",
        "Django Rest Framework",
        "Blender",
      ],
    },
    results: {
      description: "In the final delivery, all requirements were met.",
      images: ["images/portfolio/simulador.png"],
    },
    contribution:
      "I contributed to the search, analysis, and implementation of technologies that best suited the development. The first step was to gather and analyze the collected requirements, then search for the technologies to create a comparative chart of their advantages and disadvantages, with the goal of presenting conclusions and proposals. After presenting the proposal, it was adapted according to the non-functional requirements. During the first phase, the design and initial coding of the web system began using Python, Django, and several libraries for data handling and report generation; PostgreSQL was used for data persistence. The frontend consisted of HTML, CSS, and jQuery. For the backend, a RESTful API was implemented using Django Rest Framework. It is worth mentioning that the scenarios were modeled in Blender with 3D objects, specifically those used for protection against electrical discharges, which were created in the research laboratory.",
    experience:
      "The first challenge for me was learning a new language, understanding and using a framework along with its libraries. It wasn't just about learning a new language or technology, but also optimizing response time. Since simulating the areas built by the user and rendering them in the browser took too long, it forced me to look for improvements in the project in terms of optimization, factoring, and searching for libraries that would help reduce the response time.",
  },
  {
    title: "Touristic",
    img_main: "images/portfolio/turistico.png",
    description:
      "This project was a prototype for managing and selling travel packages to the general public through company collaborators or sales representatives.",
    url_name: "touristic",
    roles: "I worked as a web developer.",
    technologies: {
      description: "",
      frontend: [],
      backend: [],
    },
    results: {
      description: "All requirements were met in the final delivery.",
      images: ["images/portfolio/turistico.png"],
    },
    contribution:
      "As a web developer, I contributed to the frontend of the project, implementing HTML, CSS, and Bootstrap 3. I also participated in backend development, coding search queries using SQL Server and ASP.NET MVC 5.",
    experience:
      "While working on this project, I expanded my knowledge of CSS, focusing on media queries and Bootstrap 3. Additionally, I learned to leverage the ASP .NET MVC framework, LINQ, and SQL Server for backend development.",
  },
  {
    title: "Billing",
    img_main: "images/portfolio/facturacion.png",
    description:
      "Project focused on invoicing fiscal receipts according to version 3.3 of the Tax Administration Service (SAT).",
    url_name: "billing",
    roles:
      "The roles performed were: researcher, software engineer, and web developer.",
    technologies: {
      description: "",
      frontend: ["Bootstrap 3", "jQuery"],
      backend: ["c#", "ASP .Net MVC", "SQL Server"],
    },
    contribution:
      "The language used was C# with the ASP .Net MVC framework, and for data persistence, SQL Server was used. For the frontend, Bootstrap 3 and jQuery were utilized.",
    results: {
      description: "In the final delivery, all requirements were met.",
      images: ["images/portfolio/facturacion.png", "images/portfolio/Factura.png"],
    },
    experience: "",
  },
  {
    title: "POS",
    img_main: "images/portfolio/TPV.png",
    description: "Developing a desktop software for POS.",
    url_name: "pos",
    roles:
      "Responsibilities included: Business analysis, Scrum Master, and Technical Lead.",
    technologies: {
      description:
        "The application was developed using a technology stack consisting of:",
      frontend: [],
      backend: ["C#", "WPF", "SQL Server"],
    },
    contribution:
      "In the analysis and design stages, I defined the implementation based on a multi-tier architecture, including the database structure and the user interface design. I worked collaboratively with another team member to create wireframes which were presented to the project stakeholder for review. Any necessary revisions were made and the final wireframes were then provided to the development team. I was responsible for guiding the project's progress through the development phase, employing the SCRUM methodology. To support the team, I provided technical assistance and used tools such as Trello to organize and prioritize user stories in collaboration with the product owner. Daily stand-ups of 10-15 minutes allowed me to address team questions and ensure everyone had the information required to complete their tasks.",
    results: {
      description: "",
      images: [
        "images/portfolio/PagoDeLinea.png",
        "images/portfolio/TPVVistaTableroBackOffice.png",
        "images/portfolio/GenerarNotificaciones.png",
      ],
    },
    experience:
      "This project taught me the importance of clear and concise communication, as well as the ability to work effectively as a team, especially when dealing with change. The experience of collaborating with both in-person and remote team members was particularly insightful.",
  },
  {
    title: "Commissions",
    img_main: "images/portfolio/comisiones.png",
    description:
      "System for managing clients, products, employees, sales calculations, and commission payments.",
    url_name: "commissions",
    roles:
      "Roles performed: Business Analyst and Technical Lead of the development team.",
    technologies: {
      description: "",
      frontend: ["Bootstrap 3", "jQuery"],
      backend: ["ASP.NET MVC", "SQL Server"],
    },
    contribution:
      "The management was carried out using the SCRUM framework. Every day, 10 to 15-minute meetings were held to update the team on progress and address any questions. At the end of each iteration, we had remote meetings with the end user. The tools used were Trello for project management and Git for version control of the application.",
    results: {
      description:
        "In the final delivery, all requirements were met, a user manual was created, and the end users were trained.",
      images: ["images/portfolio/comisiones.png"],
    },
    experience:
      "The initiative is key for professional development and the project's success; it was a challenge to communicate this to each team member. Clear and concise communication with appropriate language is very important for the team to feel motivated and valued.",
  },
  {
    title: "CRM",
    img_main: "images/portfolio/CRM2.png",
    description:
      "Development of a CRM adapted to the operations of the sales department.",
    url_name: "crm",
    roles:
      "The roles performed were: business analysis collaborator and web developer.",
    technologies: {
      description: "",
      frontend: ["React JS", "Material UI", "Redux", "agGrid"],
      backend: ["PHP", "Codeigniter", "MySQL"],
    },
    contribution: "",
    results: {
      description: "In the final delivery, all requirements were met.",
      images: ["images/portfolio/CRM.png"],
    },
    experience:
      "The learning of a new technology during development with limited time was a primary challenge, as the situation involved constant changes in business logic. Once I became familiar with the new technology, I was able to recover the time spent on learning. Communication, cooperation, and the interest of the end client are undoubtedly vital for development.",
  },
  {
    title: "Questionnarie",
    img_main: "images/portfolio/loginQR.jpg",
    description:
      "The project consisted of: an application for questionnaires to evaluate specific areas of hotel facilities and an application for managing questionnaires, users, and access for the applicants.",
    url_name: "questionnaire",
    roles:
      "The roles performed were: business analysis collaborator and web developer.",
    technologies: {
      description: "",
      frontend: ["Query", "HTML", "Boostrap"],
      backend: ["PHP 5.6 ", "CodeIgniter 3", "MySQL"],
    },
    contribution: "",
    results: {
      description: "In the final delivery, all requirements were met.",
      images: ["images/portfolio/qr.jpg", "images/portfolio/loginQR.jpg"],
    },
    experience: "",
  },
  {
    title: "Extranet",
    img_main: "images/portfolio/panelnoktos.jpg",
    description:
      "Development of an application for the management and administration of booking and pricing operations",
    url_name: "extranet",
    roles: "The role performed was web developer.",
    technologies: {
      description: "",
      frontend: ["jQuery", "HTML", "Boostrap"],
      backend: ["PHP 7.2", "Laravel"],
    },
    contribution: "",
    results: {
      description: "In the final delivery, all requirements were met.",
      images: ["images/portfolio/panelnoktos.jpg", "images/portfolio/login noktos.jpg"],
    },
    experience:
      "It is very important to take initiative to gather the missing information and shape the requirements.",
  },
];
