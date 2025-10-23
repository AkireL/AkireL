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
                A web application (Laravel, Vue.js, Python) in development designed to revolutionize
                meal planning. It generates automated weekly recipes and meal plans, significantly
                optimizing meal preparation and reducing decision fatigue for users.
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
                <strong>Challenge:</strong> Users often face significant complexity and
                compatibility issues when building custom PCs, leading to suboptimal choices,
                frustrating experiences, and potential returns. <br /><br />
                <strong>Solution:</strong> Architected and developed an intelligent, AI-powered
                recommendation system (PHP, Laravel, LLM, Microservices, Threads, MySQL). This
                system dynamically generates personalized and fully compatible PC builds,
                simplifying technical choices and making advanced technology accessible to a broader
                audience.
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
                <strong>Challenge:</strong> The team faced an unsustainable backlog of manual review
                approvals, causing delays in publishing product reviews. <br /><br />
                <strong>Solution:</strong> I developed an automated solution leveraging an LLM to
                intelligently classify reviews. This system eliminated the team's operational
                burden, allowing them to focus on strategic work. <br /><br />
                <strong>Impact:</strong> Product reviews were finally published, significantly
                improving user trust and engagement, while freeing up team resources for
                higher-value tasks.
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
