<script lang="ts" setup>
import {
  VCard,
  VChip,
  VRow,
  VCol,
  VTimeline,
  VTimelineItem,
  VCardTitle,
  VCardSubtitle,
  VCardText,
} from 'vuetify/components'
</script>
<template>
  <section aria-label="Skills and Experience">
    <!-- Technical Skills -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10" lg="8">
        <h2 id="tech-stack" class="text-h4 mb-4">
          My tech stack
          <span role="img" aria-label="tools">🛠️</span>
        </h2>
        <v-row>
          <v-col cols="12" md="4">
            <v-card
              elevation="2"
              class="pa-4"
              min-height="200"
              role="article"
              aria-labelledby="languages-heading"
            >
              <h3 id="languages-heading" class="text-h5 mb-3">Languages</h3>
              <div
                class="d-flex align-content-start flex-wrap"
                role="list"
                aria-label="Programming languages"
              >
                <v-chip class="ma-1" label role="listitem">Python</v-chip>
                <v-chip class="ma-1" label role="listitem">PHP</v-chip>
                <v-chip class="ma-1" label role="listitem">JavaScript</v-chip>
                <v-chip class="ma-1" label role="listitem">TypeScript</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="2"
              class="pa-4"
              min-height="200"
              role="article"
              aria-labelledby="frameworks-heading"
            >
              <h3 id="frameworks-heading" class="text-h5 mb-3">Frameworks</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="Frameworks">
                <v-chip class="ma-1" color="green" label role="listitem">Laravel</v-chip>
                <v-chip class="ma-1" color="green" label role="listitem">PHPUnit</v-chip>
                <v-chip class="ma-1" color="green" label role="listitem">Pest</v-chip>
                <v-chip class="ma-1" color="green" label role="listitem">FastAPI</v-chip>
                <v-chip class="ma-1" color="green" label role="listitem">Django</v-chip>
                <v-chip class="ma-1" color="green" label role="listitem">Tailwind CSS</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="2"
              class="pa-4"
              min-height="200"
              role="article"
              aria-labelledby="bundlers-heading"
            >
              <h3 id="bundlers-heading" class="text-h5 mb-3">Bundlers</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="Bundlers">
                <v-chip class="ma-1" color="orange" label role="listitem">Vite</v-chip>
                <v-chip class="ma-1" color="orange" label role="listitem">Webpack</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="2"
              class="pa-4"
              min-height="200"
              role="article"
              aria-labelledby="libraries-heading"
            >
              <h3 id="libraries-heading" class="text-h5 mb-3">Libraries</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="Libraries">
                <v-chip class="ma-1" color="secondary" label role="listitem">Inertia</v-chip>
                <v-chip class="ma-1" color="secondary" label role="listitem">Pinia</v-chip>
                <v-chip class="ma-1" color="secondary" label role="listitem">pandas</v-chip>
                <v-chip class="ma-1" color="secondary" label role="listitem">Vue.js</v-chip>
                <v-chip class="ma-1" color="secondary" label role="listitem">ReactJs</v-chip>
                <v-chip class="ma-1" color="secondary" label role="listitem">Vuetify</v-chip>
                <v-chip class="ma-1" color="secondary" label role="listitem">JQuery</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="2"
              class="pa-4"
              min-height="200"
              role="article"
              aria-labelledby="databases-heading"
            >
              <h3 id="databases-heading" class="text-h5 mb-3">Databases</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="Databases">
                <v-chip class="ma-1" color="primary" label role="listitem">MySQL</v-chip>
                <v-chip class="ma-1" color="primary" label role="listitem">PostgreSQL</v-chip>
                <v-chip class="ma-1" color="primary" label role="listitem">Redis</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="2"
              class="pa-4"
              min-height="200"
              role="article"
              aria-labelledby="apis-heading"
            >
              <h3 id="apis-heading" class="text-h5 mb-3">APIs & Protocols</h3>
              <div
                class="d-flex align-content-start flex-wrap"
                role="list"
                aria-label="APIs and Protocols"
              >
                <v-chip class="ma-1" color="purple" label role="listitem">REST</v-chip>
                <v-chip class="ma-1" color="purple" label role="listitem">WebSockets</v-chip>
                <v-chip class="ma-1" color="purple" label role="listitem">JWT</v-chip>
                <v-chip class="ma-1" color="purple" label role="listitem">OAuth2</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="2"
              class="pa-4"
              min-height="200"
              role="article"
              aria-labelledby="devops-heading"
            >
              <h3 id="devops-heading" class="text-h5 mb-3">DevOps</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="DevOps">
                <v-chip class="ma-1" color="warning" label role="listitem">Docker</v-chip>
                <v-chip class="ma-1" color="warning" label role="listitem">AWS Lambda</v-chip>
                <v-chip class="ma-1" color="warning" label role="listitem">AWS S3</v-chip>
                <v-chip class="ma-1" color="warning" label role="listitem">git</v-chip>
                <v-chip class="ma-1" color="warning" label role="listitem">GitHub Actions</v-chip>
                <v-chip class="ma-1" color="warning" label role="listitem">pipelines</v-chip>
                <v-chip class="ma-1" color="warning" label role="listitem">Sentry</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="2"
              class="pa-4"
              min-height="200"
              role="article"
              aria-labelledby="architecture-heading"
            >
              <h3 id="architecture-heading" class="text-h5 mb-3">Architecture & Engineering</h3>
              <div
                class="d-flex align-content-start flex-wrap"
                role="list"
                aria-label="Architecture and Engineering"
              >
                <v-chip class="ma-1" color="info" label role="listitem">Clean Architecture</v-chip>
                <v-chip class="ma-1" color="info" label role="listitem">Event-Driven Design</v-chip>
                <v-chip class="ma-1" color="info" label role="listitem"
                  >System Performance Optimization</v-chip
                >
                <v-chip class="ma-1" color="info" label role="listitem">TDD</v-chip>
                <v-chip class="ma-1" color="info" label role="listitem">OWASP</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="2"
              class="pa-4"
              min-height="200"
              role="article"
              aria-labelledby="learning-heading"
            >
              <h3 id="learning-heading" class="text-h5 mb-3">Learning & Training</h3>
              <div
                class="d-flex align-content-start flex-wrap"
                role="list"
                aria-label="Learning and Training"
              >
                <v-chip class="ma-1" color="pink" label role="listitem">Scikit-learn</v-chip>
                <v-chip class="ma-1" color="pink" label role="listitem">TensorFlow & Keras</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="2"
              class="pa-4"
              min-height="200"
              role="article"
              aria-labelledby="soft-skills-heading"
            >
              <h3 id="soft-skills-heading" class="text-h5 mb-3">Soft Skills</h3>
              <div
                class="d-flex align-content-start flex-wrap"
                role="list"
                aria-label="Soft Skills"
              >
                <v-chip class="ma-1" color="teal" label role="listitem">Clear communication</v-chip>
                <v-chip class="ma-1" color="teal" label role="listitem">Problem-solving</v-chip>
                <v-chip class="ma-1" color="teal" label role="listitem">Adaptability</v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Work Experience Highlights -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10" lg="8">
        <h2 id="experience" class="text-h4 mb-4">
          My journey so far
          <span role="img" aria-label="rocket">🚀</span>
        </h2>
        <v-timeline side="end" align="start" role="list" aria-label="Work experience timeline">
          <v-timeline-item dot-color="primary" size="small" role="listitem">
            <template v-slot:opposite>
              <div class="text-body-1"><time datetime="2025-06">June 2025</time> - Present</div>
            </template>
            <v-card elevation="2" class="experience-card">
              <v-card-title class="text-h6"
                >Backend Developer<span class="text-grey-darken-1">- YouNoodle </span>
                <v-chip size="x-small" color="success" class="ml-2">Remote</v-chip>
              </v-card-title>
              <v-card-text class="px-8 text-body-1 card-text">
                <ul>
                  <li>Migrating legacy systems to enhance maintainability and scalability.</li>
                  <li>
                    Modernizing and migrating legacy systems for better maintainability and
                    scalability.
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item dot-color="secondary" size="small" role="listitem">
            <template v-slot:opposite>
              <div class="text-body-1">
                <time datetime="2022-05">May 2022</time> - <time datetime="2024-12">Dec 2024</time>
              </div>
            </template>
            <v-card elevation="2" class="experience-card">
              <v-card-title class="text-h6"
                >Backend Developer<span class="text-grey-darken-1">- Cyberpuerta</span>
                <v-chip size="x-small" color="success" class="ml-2">Remote</v-chip></v-card-title
              >
              <v-card-text class="px-8 text-body-1">
                <ul>
                  <li>
                    Led backend refactoring for a high-traffic e-commerce platform experiencing
                    performance and scalability limitations, redesigning core services to reduce
                    coupling and enable independent evolution of APIs.
                  </li>
                  <li>
                    Designed and implemented modular backend architectures, improving
                    maintainability and supporting future growth without disrupting existing
                    functionality.
                  </li>
                  <li>
                    Built and deployed AI-driven backend systems using Python (FastAPI) and PHP
                    (Laravel) to address operational bottlenecks: Automated classification of
                    product reviews and Q&A content, significantly reducing manual moderation
                    workload. Developed a recommendation system to generate personalized PC
                    configurations based on user needs and budget.
                  </li>
                  <li>
                    Worked cross-functionally to align technical decisions with business objectives
                    and operational constraints.
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item dot-color="success" size="small" role="listitem">
            <template v-slot:opposite>
              <div class="text-body-1">
                <time datetime="2021-05">May 2021</time> - <time datetime="2022-05">May 2022</time>
              </div>
            </template>
            <v-card elevation="2" class="experience-card">
              <v-card-title class="text-h6"
                >Laravel Developer<span class="text-grey-darken-1"> - Kinedu</span>
                <v-chip size="x-small" color="success" class="ml-2">Remote</v-chip></v-card-title
              >
              <v-card-text class="px-8 text-body-1">
                <ul>
                  <li>
                    Optimized MySQL schemas and complex queries for data-heavy features, improving
                    search performance and data retrieval efficiency.
                  </li>
                  <li>
                    Integrated Stripe-based subscription billing, ensuring secure payment flows and
                    reducing issues related to failed transactions.
                  </li>
                  <li>
                    Contributed to backend APIs designed under a microservices-oriented approach,
                    supporting both mobile and web clients.
                  </li>
                  <li>
                    Participated in backend performance improvements that enhanced overall API
                    responsiveness and reliability.
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item dot-color="info" size="small" role="listitem">
            <template v-slot:opposite>
              <div class="text-body-1">
                <time datetime="2020-08">Aug 2020</time> - <time datetime="2021-04">Apr 2021</time>
              </div>
            </template>
            <v-card elevation="2" class="experience-card">
              <v-card-title class="text-h6">Full Stack Developer</v-card-title>
              <v-card-subtitle class="text-subtitle-1">
                AIRmedia Digital Agency
                <v-chip size="x-small" color="success" class="ml-2">Remote</v-chip>
              </v-card-subtitle>
              <v-card-text class="px-8 text-body-1">
                <ul>
                  <li>
                    Translated evolving business requirements into scalable backend and frontend
                    solutions, collaborating with design and product teams.
                  </li>
                  <li>
                    Designed backend features with clear separation of concerns, improving code
                    readability and ease of maintenance.
                  </li>
                  <li>
                    Delivered features end-to-end, from technical design to production deployment
                    and post-release support.
                  </li>
                  <li>
                    Created technical documentation and high-level system diagrams to align
                    engineering decisions with non-technical stakeholders.
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item dot-color="warning" size="small" role="listitem">
            <template v-slot:opposite>
              <div class="text-body-1">
                <time datetime="2017-06">Jun 2017</time> - <time datetime="2020-04">Apr 2020</time>
              </div>
            </template>
            <v-card elevation="2" class="experience-card">
              <v-card-title class="text-h6"
                >Full Stack Developer
                <span class="text-grey-darken-1">- iNet Soluciones S de RL</span>
                <v-chip size="x-small" color="error" class="ml-2">On-site</v-chip></v-card-title
              >
              <v-card-text class="px-8 text-body-1">
                <ul>
                  <li>
                    Served as technical lead for multiple web projects, owning architectural
                    decisions and ensuring backend reliability and data consistency.
                  </li>
                  <li>
                    Mentored junior developers through code reviews and technical guidance,
                    improving code quality and team delivery standards.
                  </li>
                  <li>
                    Gathered requirements directly from stakeholders and translated them into clear
                    technical designs and implementations.
                  </li>
                  <li>
                    Refactored legacy codebases to improve maintainability, readability, and
                    long-term stability.
                  </li>
                  <li>
                    Collaborated with design and business teams to deliver user-focused features
                    aligned with product objectives.
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item dot-color="grey" size="small" role="listitem">
            <template v-slot:opposite>
              <div class="text-body-1">
                <time datetime="2016-09">Sept 2016</time> - <time datetime="2017-04">Apr 2017</time>
              </div>
            </template>
            <v-card elevation="2" class="experience-card">
              <v-card-title class="text-h6"
                >Software Engineer <span class="text-grey-darken-1">- INAOE </span
                ><v-chip size="x-small" color="error" class="ml-2">On-site</v-chip>
              </v-card-title>
              <v-card-text class="px-8 text-body-1">
                <ul>
                  <li>
                    Developed software solutions for academic and applied research projects,
                    collaborating closely with researchers.
                  </li>
                  <li>
                    Designed and implemented data-processing components to support experimentation,
                    analysis, and reproducibility.
                  </li>
                  <li>
                    Translated research requirements into maintainable backend systems, prioritizing
                    correctness and clarity.
                  </li>
                  <li>
                    Contributed to documentation and internal knowledge sharing within the research
                    team.
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </section>
</template>
