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
            <v-card elevation="2" class="pa-4" min-height="200" role="article" aria-labelledby="languages-heading">
              <h3 id="languages-heading" class="text-h5 mb-3">Languages</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="Programming languages">
                <v-chip class="ma-1" label role="listitem">Python</v-chip>
                <v-chip class="ma-1" label role="listitem">PHP</v-chip>
                <v-chip class="ma-1" label role="listitem">JavaScript</v-chip>
                <v-chip class="ma-1" label role="listitem">TypeScript</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="200" role="article" aria-labelledby="frameworks-heading">
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
            <v-card elevation="2" class="pa-4" min-height="200" role="article" aria-labelledby="bundlers-heading">
              <h3 id="bundlers-heading" class="text-h5 mb-3">Bundlers</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="Bundlers">
                <v-chip class="ma-1" color="orange" label role="listitem">Vite</v-chip>
                <v-chip class="ma-1" color="orange" label role="listitem">Webpack</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="200" role="article" aria-labelledby="libraries-heading">
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
            <v-card elevation="2" class="pa-4" min-height="200" role="article" aria-labelledby="databases-heading">
              <h3 id="databases-heading" class="text-h5 mb-3">Databases</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="Databases">
                <v-chip class="ma-1" color="primary" label role="listitem">MySQL</v-chip>
                <v-chip class="ma-1" color="primary" label role="listitem">PostgreSQL</v-chip>
                <v-chip class="ma-1" color="primary" label role="listitem">Redis</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="200" role="article" aria-labelledby="apis-heading">
              <h3 id="apis-heading" class="text-h5 mb-3">APIs & Protocols</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="APIs and Protocols">
                <v-chip class="ma-1" color="purple" label role="listitem">REST</v-chip>
                <v-chip class="ma-1" color="purple" label role="listitem">WebSockets</v-chip>
                <v-chip class="ma-1" color="purple" label role="listitem">JWT</v-chip>
                <v-chip class="ma-1" color="purple" label role="listitem">OAuth2</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="200" role="article" aria-labelledby="devops-heading">
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
            <v-card elevation="2" class="pa-4" min-height="200" role="article" aria-labelledby="architecture-heading">
              <h3 id="architecture-heading" class="text-h5 mb-3">Architecture & Engineering</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="Architecture and Engineering">
                <v-chip class="ma-1" color="info" label role="listitem">Clean Architecture</v-chip>
                <v-chip class="ma-1" color="info" label role="listitem">Event-Driven Design</v-chip>
                <v-chip class="ma-1" color="info" label role="listitem">System Performance Optimization</v-chip>
                <v-chip class="ma-1" color="info" label role="listitem">TDD</v-chip>
                <v-chip class="ma-1" color="info" label role="listitem">OWASP</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="200" role="article" aria-labelledby="learning-heading">
              <h3 id="learning-heading" class="text-h5 mb-3">Learning & Training</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="Learning and Training">
                <v-chip class="ma-1" color="pink" label role="listitem">Scikit-learn</v-chip>
                <v-chip class="ma-1" color="pink" label role="listitem">TensorFlow & Keras</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="200" role="article" aria-labelledby="soft-skills-heading">
              <h3 id="soft-skills-heading" class="text-h5 mb-3">Soft Skills</h3>
              <div class="d-flex align-content-start flex-wrap" role="list" aria-label="Soft Skills">
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
              <v-card-title class="text-h6">Backend Developer</v-card-title>
              <v-card-subtitle class="text-subtitle-1 card-subtitle">YouNoodle</v-card-subtitle>
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
              <v-card-title class="text-h6">Sr. Backend Developer</v-card-title>
              <v-card-subtitle class="text-subtitle-1">Cyberpuerta</v-card-subtitle>
              <v-card-text class="px-8 text-body-1">
                <ul>
                  <li>
                    Implemented and fine-tuned a DistilBERT model for automated product review
                    classification, improving data analysis efficiency and enabling targeted
                    marketing strategies.
                  </li>
                  <li>
                    Developed an AI-driven PC recommendation system for non-expert users, increasing
                    user engagement and conversion rates by simplifying product discovery.
                  </li>
                  <li>
                    Orchestrated content tagging and classification via OpenAI APIs, minimizing
                    manual work and improving consistency across the platform.
                  </li>
                  <li>
                    Designed and developed a reusable frontend component library, accelerating
                    development cycles and ensuring a consistent UI across multiple applications.
                  </li>
                  <li>
                    Architected and initiated the migration from a monolithic to a modular
                    microservices architecture, laying the groundwork for enhanced system resilience
                    and independent team development.
                  </li>
                  <li>
                    Successfully refactored critical legacy systems, performance improvement and a
                    substantial reduction in technical debt, facilitating smoother feature
                    development.
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
              <v-card-title class="text-h6">Laravel Developer</v-card-title>
              <v-card-subtitle class="text-subtitle-1">Kinedu</v-card-subtitle>
              <v-card-text class="px-8 text-body-1">
                <ul>
                  <li>
                    Designed and implemented robust RESTful APIs using Laravel for new
                    microservices, enabling seamless data exchange and supporting critical business
                    functionalities.
                  </li>
                  <li>
                    Optimized microservice endpoints by eliminating N+1 query issues and refining
                    SQL queries, significantly improving backend response times and overall
                    application performance.
                  </li>
                  <li>
                    Successfully integrated the Stripe payment gateway, enabling secure subscription
                    management and automated billing processes, which expanded revenue streams.
                  </li>
                  <li>
                    Enhanced user experience and web app module interactivity by leveraging Livewire
                    and Alpine.js, leading to more dynamic and responsive interfaces.
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
