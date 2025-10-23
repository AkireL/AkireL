<script lang="ts" setup>
import { VCard, VRow, VCol } from 'vuetify/components'
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
        <p class="text-body-1 text-justify">
          I'm a Senior Backend Developer who loves turning complex systems into elegant, scalable
          solutions. My expertise lies in Laravel and Python ecosystems, and I have a special knack
          for breathing new life into legacy code by transforming monolithic architectures into
          modular, maintainable systems.
        </p>
        <p class="text-body-1 mt-3 text-justify">
          What really gets me excited? Integrating AI into real world applications. From fine-tuning
          DistilBERT models to building intelligent recommendation systems, I'm passionate about
          making technology work smarter for users and businesses alike.
        </p>
      </v-col>
    </v-row>

    <!-- Beyond Code -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10" lg="8">
        <h2 class="text-h4 mb-4">Beyond the code 🌟</h2>
        <v-card elevation="2" class="pa-5" color="secondary" variant="tonal">
          <p class="text-body-1 text-justify">
            My approach to code quality is pragmatic: self-explanatory variable names, no duplicated
            code, and controlled cognitive and cyclomatic complexity. As for TDD and design
            patterns, I apply them when they truly help, not out of habit.
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
        <p class="text-body-1 mb-4 text-secondary">
          <a href="mailto:iamdleonor@gmail.com">Let's talk! Send me a message.</a>
        </p>
      </v-col>
    </v-row>
  </section>
</template>
