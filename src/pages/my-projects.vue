<script lang="ts" setup>
import { VCard, VCardActions, VChip, VRow, VCol, VCardText } from 'vuetify/components'
</script>
<template>
  <!-- Featured Projects -->
  <v-row justify="center" class="mt-15">
    <v-col cols="12" md="10" lg="8">
      <h2 class="text-h4 mb-4">Projects I'm proud of 🎯</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-card elevation="2" class="h-100">
            <h3 class="text-h5 mb-2 pa-4" style="min-height: 65px">Kitchen Planner</h3>
            <v-card-text>
              <p class="text-body-1 text-justify">
                Web app in development that generates automated weekly recipes and meal plans to
                optimize meal planning and reduce decision fatigue.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-chip size="small" color="info" class="mt-2" label>In Progress</v-chip>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card elevation="2" class="h-100">
            <h3 class="text-h5 mb-2 pa-4" style="min-height: 65px">AI-Powered PC Builder</h3>
            <v-card-text>
              <p class="text-body-1 text-justify">
                Intelligent recommendation system that creates personalized PC builds based on user
                needs, making tech accessible to everyone.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-chip size="small" color="success" class="mt-2" label>Deployed</v-chip>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card elevation="2" class="h-100">
            <h3 class="text-h5 mb-2 pa-4" style="min-height: 65px">
              AI-Powered Content Moderation
            </h3>
            <v-card-text>
              <p class="text-body-1 text-justify" style="min-height: 200px">
                The review team was drowning in manual moderation tasks, causing a massive backlog
                products had zero reviews because approval was deprioritized. I implemented an LLM
                that automated the entire workflow, freeing the team to focus on strategic work
                while products finally gained the social proof they needed.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-chip size="small" color="success" class="mt-2" label>Deployed</v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
