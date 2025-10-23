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
  <section>
    <!-- Technical Skills -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10" lg="8">
        <h2 class="text-h4 mb-4">My tech stack 🛠️</h2>
        <v-row>
          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="250">
              <h3 class="text-h5 mb-3">Languages</h3>
              <div class="d-flex align-content-start flex-wrap">
                <v-chip class="ma-1" label>PHP</v-chip>
                <v-chip class="ma-1" label>Python</v-chip>
                <v-chip class="ma-1" label>TypeScript</v-chip>
                <v-chip class="ma-1" label>JavaScript</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="250">
              <h3 class="text-h5 mb-3">Frameworks</h3>
              <div class="d-flex align-content-start flex-wrap">
                <v-chip class="ma-1" color="green" label>Laravel</v-chip>
                <v-chip class="ma-1" color="green" label>FastAPI</v-chip>
                <v-chip class="ma-1" color="green" label>Vue.js</v-chip>
                <v-chip class="ma-1" color="green" label>ReactJS</v-chip>
                <v-chip class="ma-1" color="green" label>Tailwind CSS</v-chip>
                <v-chip class="ma-1" color="green" label>Livewire</v-chip>
                <v-chip class="ma-1" color="green" label>Alpine.js</v-chip>
                <v-chip class="ma-1" color="green" label>Vuetify</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="250">
              <h3 class="text-h5 mb-3">Databases</h3>
              <div class="d-flex align-content-start flex-wrap">
                <v-chip class="ma-1" color="primary" label>MySQL</v-chip>
                <v-chip class="ma-1" color="primary" label>PostgreSQL</v-chip>
                <v-chip class="ma-1" color="primary" label>Redis</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="250">
              <h3 class="text-h5 mb-3">DevOps</h3>
              <div class="d-flex align-content-start flex-wrap">
                <v-chip class="ma-1" color="warning" label>Docker</v-chip>
                <v-chip class="ma-1" color="warning" label>AWS Lambda</v-chip>
                <v-chip class="ma-1" color="warning" label>GCP</v-chip>
                <v-chip class="ma-1" color="warning" label>GitHub Actions</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="250">
              <h3 class="text-h5 mb-3">Libraries</h3>
              <div class="d-flex align-content-start flex-wrap">
                <v-chip class="ma-1" color="secondary" label>Inertia</v-chip>
                <v-chip class="ma-1" color="secondary" label>Vuetify</v-chip>
                <v-chip class="ma-1" color="secondary" label>OpenAI</v-chip>
                <v-chip class="ma-1" color="secondary" label>VuePress</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="250">
              <h3 class="text-h5 mb-3">Testing & Architecture</h3>
              <div class="d-flex align-content-start flex-wrap">
                <v-chip color="info" label class="ma-1">PHPUnit</v-chip>
                <v-chip color="info" label class="ma-1">Pest</v-chip>
                <v-chip color="info" label class="ma-1">TDD</v-chip>
                <v-chip color="info" label class="ma-1">Hexagonal Architecture</v-chip>
                <v-chip color="info" label class="ma-1">RESTful APIs</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4" min-height="250">
              <h3 class="text-h5 mb-3">Soft Skills</h3>
              <div class="d-flex align-content-start flex-wrap">
                <v-chip class="ma-1" color="secondary" label>Clear communication</v-chip>
                <v-chip class="ma-1" color="secondary" label>Problem-solving</v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- Work Experience Highlights -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10" lg="8">
        <h2 class="text-h4 mb-4">My journey so far 🚀</h2>
        <v-timeline side="end" align="start">
          <v-timeline-item dot-color="primary" size="small">
            <template v-slot:opposite>
              <div class="text-body-1">June 2025 - Present</div>
            </template>
            <v-card elevation="2">
              <v-card-title class="text-h7">Backend Developer</v-card-title>
              <v-card-subtitle class="text-h6">YouNoodle</v-card-subtitle>
              <v-card-text class="px-8 text-body-1">
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

          <v-timeline-item dot-color="secondary" size="small">
            <template v-slot:opposite>
              <div class="text-body-1">May 2022 - Dec 2024</div>
            </template>
            <v-card elevation="2">
              <v-card-title class="text-h7">Sr. Backend Developer</v-card-title>
              <v-card-subtitle class="text-h6">Cyberpuerta</v-card-subtitle>
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

          <v-timeline-item dot-color="success" size="small">
            <template v-slot:opposite>
              <div class="text-body-1">May 2021 - May 2022</div>
            </template>
            <v-card elevation="2">
              <v-card-title class="text-h7">Laravel Developer</v-card-title>
              <v-card-subtitle class="text-h6">Kinedu</v-card-subtitle>
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
