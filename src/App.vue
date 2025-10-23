<script setup lang="ts">
import { ref } from 'vue'
import { VTabs, VTab, VTabsWindow, VTabsWindowItem, VContainer } from 'vuetify/components'
import AboutMe from './pages/about-me.vue'
import ProfessionalExperience from './pages/professional-experience.vue'
import MyProjects from './pages/my-projects.vue'
const tab = ref(1)
</script>

<template>
  <main>
    <div class="m-12 pa-4">
      <v-tabs v-model="tab" align-tabs="center" role="tablist">
        <v-tab :value="1" aria-controls="about-me">About me</v-tab>
        <v-tab :value="2" aria-controls="professional-experience">My professional experience</v-tab>
        <v-tab :value="3" aria-controls="my-projects">My Projects</v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <!-- Who are -->
        <v-tabs-window-item :key="1" :value="1">
          <v-container fluid>
            <AboutMe></AboutMe>
          </v-container>
        </v-tabs-window-item>

        <!-- Professional -->
        <v-tabs-window-item :key="2" :value="2">
          <v-container fluid>
            <ProfessionalExperience></ProfessionalExperience>
          </v-container>
        </v-tabs-window-item>

        <!-- Projects -->
        <v-tabs-window-item :key="3" :value="3">
          <v-container fluid>
            <MyProjects></MyProjects>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </main>
</template>
