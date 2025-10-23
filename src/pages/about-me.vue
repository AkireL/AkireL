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
    <v-row justify="center">
      <h1 class="text-h3 mt-10 mb-5">Hey! I'm Leonor 👋</h1>
    </v-row>

    <v-row justify="center" class="" :dense="true">
      <v-col cols="auto">
        <a href="https://github.com/AkireL">
          <img src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github" alt="GitHub" />
        </a>
      </v-col>
      <v-col cols="auto">
        <a href="mailto:iamdleonor@gmail.com">
          <img
            src="https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white"
            alt="Email"
          />
        </a>
      </v-col>
      <v-col cols="auto">
        <a href="https://www.linkedin.com/in/erika-basurto/">
          <img
            src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin"
            alt="LinkedIn"
          />
        </a>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-6">
      <v-col cols="12" md="10" lg="8">
        <v-card elevation="3" class="pa-6" color="primary" variant="tonal">
          <p class="text-body-1 text-center mb-0">
            Senior Backend Developer specialized in scalable solutions, microservices migration & AI
            integration
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="10" lg="8">
        <h2 class="text-h4 mb-4">What I do 💻</h2>
        <p class="text-body-1">
          I'm a Senior Backend Developer who loves turning complex systems into elegant, scalable
          solutions. My expertise lies in Laravel and Python ecosystems, and I have a special knack
          for breathing new life into legacy code – transforming monolithic architectures into
          modular, maintainable systems.
        </p>
        <p class="text-body-1 mt-3">
          What really gets me excited? Integrating AI into real-world applications. From fine-tuning
          DistilBERT models to building intelligent recommendation systems, I'm passionate about
          making technology work smarter for users and businesses alike.
        </p>
      </v-col>
    </v-row>

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
                <v-chip color="warning" label>CI/CD Pipelines</v-chip>
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
                  <li>Maintaining and refactoring legacy code to reduce backend response times</li>
                  <li>Migrating legacy systems to improve maintainability and scalability</li>
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
                    Fine-tuned DistilBERT to classify product reviews into specific categories
                  </li>
                  <li>Built an AI-driven PC recommendation system for non-expert users</li>
                  <li>Automated content classification using OpenAI</li>
                  <li>Developed a reusable frontend component library</li>
                  <li>Designed migration strategy from monolithic to modular architecture</li>
                  <li>
                    Refactored legacy systems to enhance performance and reduce technical debt
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
                  <li>Developed RESTful APIs for microservices in Laravel</li>
                  <li>Integrated Stripe payment system with subscriptions and billing</li>
                  <li>Improved web app modules using Livewire and Alpine.js</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <!-- Featured Projects -->
    <v-row justify="center" class="mt-15">
      <v-col cols="12" md="10" lg="8">
        <h2 class="text-h4 mb-4">Projects I'm proud of 🎯</h2>
        <v-row>
          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4 h-100">
              <h3 class="text-h5 mb-2">Kitchen Planner</h3>
              <p class="text-body-1">
                Web app in development that generates automated weekly recipes and meal plans to
                optimize meal planning and reduce decision fatigue.
              </p>
              <v-chip size="small" color="info" class="mt-2" label>In Progress</v-chip>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4 h-100">
              <h3 class="text-h5 mb-2">AI-Powered PC Builder</h3>
              <p class="text-body-1">
                Intelligent recommendation system that creates personalized PC builds based on user
                needs, making tech accessible to everyone.
              </p>
              <v-chip size="small" color="success" class="mt-2" label>Deployed</v-chip>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4 h-100">
              <h3 class="text-h5 mb-2">Content Moderation AI</h3>
              <p class="text-body-1">
                Implemented OpenAI to automatically classify product reviews and questions,
                improving content quality and user experience.
              </p>
              <v-chip size="small" color="success" class="mt-2" label>Deployed</v-chip>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Beyond Code -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10" lg="8">
        <h2 class="text-h4 mb-4">Beyond the code 🌟</h2>
        <v-card elevation="2" class="pa-5" color="secondary" variant="tonal">
          <p class="text-body-1">
            I believe in clean architecture (hexagonal architecture enthusiast here!), test-driven
            development, and writing code that other developers will thank you for. Clear
            communication and problem-solving aren't just soft skills to me – they're essential
            tools in my toolkit.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Call to Action -->
    <v-row justify="center" class="mt-12 mb-6">
      <v-col cols="12" md="10" lg="8" class="text-center">
        <h2 class="text-h4 mb-4">Let's build something amazing! ✨</h2>
        <p class="text-body-1 mb-4">
          Have a challenging project? Need to modernize a legacy system? Or just want to talk tech?
        </p>
        <p class="text-body-1 mb-4 text-secondary">Let's talk! Send a message.</p>
      </v-col>
    </v-row>
  </section>
</template>
