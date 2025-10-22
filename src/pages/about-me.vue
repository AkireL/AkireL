<script lang="ts" setup>
import {
  VCard,
  VBtn,
  VIcon,
  VChip,
  VRow,
  VCol,
  VChipGroup,
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
      <h1 class="my-10">Hey! I'm Leonor 👋</h1>
    </v-row>

    <v-row justify="center" class="mt-2 gap-2" :dense="true">
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
          <p class="text-h6 text-center mb-0">
            Senior Backend Developer specialized in scalable solutions, microservices migration & AI
            integration
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="10" lg="8">
        <h3 class="text-h5 mb-4">What I do 💻</h3>
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
        <h3 class="text-h5 mb-4">My tech stack 🛠️</h3>
        <v-row>
          <v-col cols="12" md="6">
            <v-card elevation="2" class="pa-4">
              <h4 class="text-h6 mb-3">Backend & Languages</h4>
              <v-chip-group column>
                <v-chip color="primary" variant="outlined">Laravel</v-chip>
                <v-chip color="primary" variant="outlined">PHP</v-chip>
                <v-chip color="primary" variant="outlined">Python</v-chip>
                <v-chip color="primary" variant="outlined">FastAPI</v-chip>
                <v-chip color="primary" variant="outlined">TypeScript</v-chip>
                <v-chip color="primary" variant="outlined">JavaScript</v-chip>
              </v-chip-group>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card elevation="2" class="pa-4">
              <h4 class="text-h6 mb-3">Databases & Caching</h4>
              <v-chip-group column>
                <v-chip color="secondary" variant="outlined">MySQL</v-chip>
                <v-chip color="secondary" variant="outlined">PostgreSQL</v-chip>
                <v-chip color="secondary" variant="outlined">Redis</v-chip>
              </v-chip-group>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card elevation="2" class="pa-4">
              <h4 class="text-h6 mb-3">Frontend</h4>
              <v-chip-group column>
                <v-chip color="success" variant="outlined">Vue.js</v-chip>
                <v-chip color="success" variant="outlined">React</v-chip>
                <v-chip color="success" variant="outlined">Livewire</v-chip>
                <v-chip color="success" variant="outlined">Alpine.js</v-chip>
                <v-chip color="success" variant="outlined">Tailwind CSS</v-chip>
              </v-chip-group>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card elevation="2" class="pa-4">
              <h4 class="text-h6 mb-3">DevOps & AI</h4>
              <v-chip-group column>
                <v-chip color="warning" variant="outlined">Docker</v-chip>
                <v-chip color="warning" variant="outlined">AWS Lambda</v-chip>
                <v-chip color="warning" variant="outlined">GCP</v-chip>
                <v-chip color="warning" variant="outlined">OpenAI</v-chip>
                <v-chip color="warning" variant="outlined">DistilBERT</v-chip>
                <v-chip color="warning" variant="outlined">GitHub Actions</v-chip>
              </v-chip-group>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Work Experience Highlights -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10" lg="8">
        <h3 class="text-h5 mb-4">My journey so far 🚀</h3>

        <v-timeline side="end" align="start">
          <v-timeline-item dot-color="primary" size="small">
            <template v-slot:opposite>
              <div class="text-caption">June 2025 - Present</div>
            </template>
            <v-card elevation="2">
              <v-card-title class="text-h6">Backend Developer</v-card-title>
              <v-card-subtitle>YouNoodle</v-card-subtitle>
              <v-card-text class="px-8">
                <ul class="text-body-2">
                  <li>Maintaining and refactoring legacy code to reduce backend response times</li>
                  <li>Migrating legacy systems to improve maintainability and scalability</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item dot-color="secondary" size="small">
            <template v-slot:opposite>
              <div class="text-caption">May 2022 - Dec 2024</div>
            </template>
            <v-card elevation="2">
              <v-card-title class="text-h6">Sr. Backend Developer</v-card-title>
              <v-card-subtitle>Cyberpuerta</v-card-subtitle>
              <v-card-text class="px-8">
                <ul class="text-body-2">
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
              <div class="text-caption">May 2021 - May 2022</div>
            </template>
            <v-card elevation="2">
              <v-card-title class="text-h6">Laravel Developer</v-card-title>
              <v-card-subtitle>Kinedu</v-card-subtitle>
              <v-card-text class="px-8">
                <ul class="text-body-2">
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
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10" lg="8">
        <h3 class="text-h5 mb-4">Projects I'm proud of 🎯</h3>

        <v-row>
          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4 h-100">
              <v-icon color="primary" size="40" class="mb-3">mdi-silverware-fork-knife</v-icon>
              <h4 class="text-h6 mb-2">Kitchen Planner</h4>
              <p class="text-body-2">
                Web app in development that generates automated weekly recipes and meal plans to
                optimize meal planning and reduce decision fatigue.
              </p>
              <v-chip size="small" color="info" class="mt-2">In Progress</v-chip>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4 h-100">
              <v-icon color="secondary" size="40" class="mb-3">mdi-desktop-tower</v-icon>
              <h4 class="text-h6 mb-2">AI-Powered PC Builder</h4>
              <p class="text-body-2">
                Intelligent recommendation system that creates personalized PC builds based on user
                needs, making tech accessible to everyone.
              </p>
              <v-chip size="small" color="success" class="mt-2">Deployed</v-chip>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="2" class="pa-4 h-100">
              <v-icon color="warning" size="40" class="mb-3">mdi-shield-check</v-icon>
              <h4 class="text-h6 mb-2">Content Moderation AI</h4>
              <p class="text-body-2">
                Implemented OpenAI to automatically classify product reviews and questions,
                improving content quality and user experience.
              </p>
              <v-chip size="small" color="success" class="mt-2">Deployed</v-chip>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Beyond Code -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10" lg="8">
        <h3 class="text-h5 mb-4">Beyond the code 🌟</h3>
        <v-card elevation="2" class="pa-5" color="secondary" variant="tonal">
          <p class="text-body-1">
            I believe in clean architecture (hexagonal architecture enthusiast here!), test-driven
            development, and writing code that other developers will thank you for. Clear
            communication and problem-solving aren't just soft skills to me – they're essential
            tools in my toolkit.
          </p>
          <p class="text-body-1 mt-3 mb-0">
            When I'm not refactoring legacy code or fine-tuning AI models, you'll find me exploring
            new technologies, contributing to open source, or mentoring fellow developers. The tech
            world moves fast, and I love staying at the forefront of innovation! 🚀
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Call to Action -->
    <v-row justify="center" class="mt-12 mb-6">
      <v-col cols="12" md="10" lg="8" class="text-center">
        <h3 class="text-h5 mb-4">Let's build something amazing! ✨</h3>
        <p class="text-body-1 mb-4">
          Have a challenging project? Need to modernize a legacy system? Or just want to talk tech?
        </p>
        <v-btn
          color="primary"
          size="x-large"
          href="mailto:iamdleonor@gmail.com"
          prepend-icon="mdi-email-outline"
          elevation="4"
        >
          Let's talk
        </v-btn>
      </v-col>
    </v-row>
  </section>
</template>
