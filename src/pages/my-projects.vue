<script lang="ts" setup>
import { VCard, VCardActions, VChip, VRow, VCol, VCardText } from 'vuetify/components'
</script>
<template>
  <section aria-labelledby="projects-heading">
    <!-- Featured Projects -->
    <v-row justify="center" class="mt-15">
      <v-col cols="12" md="10" lg="8">
        <h2 id="projects-heading" class="text-h4 mb-4">
          Projects I'm proud of
          <span role="img" aria-label="target">🎯</span>
        </h2>
        <v-row>
          <v-col cols="12" md="6">
            <v-card
              elevation="2"
              class="h-100"
              role="article"
              aria-labelledby="kitchen-planner-title"
            >
              <h3 id="kitchen-planner-title" class="text-h5 mb-2 pa-4" style="min-height: 65px">
                Kitchen Planner
              </h3>
              <v-card-text>
                <p class="text-body-1 text-left">
                  <strong>Challenge:</strong> Daily meal planning is a time-consuming task that
                  often leads to decision fatigue and suboptimal dietary choices for individuals and
                  families.
                </p>
                <p class="text-body-1 text-left mt-3">
                  <strong>Solution:</strong> Developing a web application that generates automated
                  weekly recipes and personalized meal plans. This system leverages intelligent
                  algorithms to optimize meal preparation and nutritional balance.
                </p>
                <p class="text-body-1 text-left mt-3">
                  <strong>Impact:</strong> Aims to revolutionize meal planning by significantly
                  reducing user effort and decision fatigue, promoting healthier eating habits, and
                  saving valuable time for users. Currently in development.
                </p>
              </v-card-text>
              <v-card-actions>
                <v-chip
                  size="small"
                  class="mt-2"
                  color="info"
                  label
                  role="status"
                  aria-label="Project status: In Progress"
                >
                  In Progress
                </v-chip>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card elevation="2" class="h-100" role="article" aria-labelledby="pc-builder-title">
              <h3 id="pc-builder-title" class="text-h5 mb-2 pa-4" style="min-height: 65px">
                AI-Powered PC Builder
              </h3>
              <v-card-text>
                <p class="text-body-1 text-left">
                  <strong>Challenge:</strong> Users often face significant complexity and
                  compatibility issues when building custom PCs, leading to suboptimal choices,
                  frustrating experiences, and potential returns.
                </p>
                <p class="text-body-1 text-left mt-3">
                  <strong>Solution:</strong> Architected and developed an intelligent, AI-powered
                  recommendation system (PHP, Laravel, LLM, Microservices, Threads, MySQL). This
                  system dynamically generates personalized and fully compatible PC builds,
                  simplifying technical choices and making advanced technology accessible to a
                  broader audience.
                </p>
              </v-card-text>
              <v-card-actions>
                <v-chip
                  size="small"
                  color="success"
                  class="mt-2"
                  label
                  role="status"
                  aria-label="Project status: Deployed"
                >
                  Deployed
                </v-chip>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card
              elevation="2"
              class="h-100"
              role="article"
              aria-labelledby="content-moderation-title"
            >
              <h3 id="content-moderation-title" class="text-h5 mb-2 pa-4" style="min-height: 65px">
                AI-Powered Content Moderation
              </h3>
              <v-card-text>
                <p class="text-body-1 text-left">
                  <strong>Challenge:</strong> The team faced an unsustainable backlog of manual
                  review approvals, causing delays in publishing product reviews.
                </p>
                <p class="text-body-1 text-left mt-3">
                  <strong>Solution:</strong> I developed an automated solution leveraging an LLM to
                  intelligently classify reviews. This system eliminated the team's operational
                  burden, allowing them to focus on strategic work.
                </p>
                <p class="text-body-1 text-left mt-3">
                  <strong>Impact:</strong> Product reviews were finally published, significantly
                  improving user trust and engagement, while freeing up team resources for
                  higher-value tasks.
                </p>
              </v-card-text>
              <v-card-actions>
                <v-chip
                  size="small"
                  class="mt-2"
                  color="success"
                  label
                  role="status"
                  aria-label="Project status: Deployed"
                >
                  Deployed
                </v-chip>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card
              href="https://akirel.github.io/shopping-vue/#/"
              target="_blank"
              elevation="2"
              class="h-100"
              role="article"
              aria-labelledby="shopping-vue-title"
            >
              <h3 id="shopping-vue-title" class="text-h5 mb-2 pa-4" style="min-height: 65px">
                Shopping List
              </h3>
              <v-card-text>
                <p class="text-body-1 text-left">
                  <strong>Challenge:</strong> Managing shopping lists can be disorganized and
                  inefficient, often resulting in forgotten items, duplicate purchases, and lack of
                  budget control during grocery shopping trips.
                </p>
                <p class="text-body-1 text-left mt-3">
                  <strong>Solution:</strong> Developing a web application that allows users to
                  create, organize, and manage their shopping lists digitally with real-time expense
                  tracking. This system provides an intuitive interface for adding items with
                  prices, automatically calculating total spending, and maintaining persistent
                  storage across sessions.
                </p>
                <p class="text-body-1 text-left mt-3">
                  <strong>Impact:</strong> Aims to streamline the shopping experience by providing a
                  centralized platform for list management and budget control, helping users track
                  their spending in real-time, reduce overspending, improve shopping efficiency, and
                  make more informed purchasing decisions. Successfully deployed and functional.
                </p>
              </v-card-text>
              <v-card-actions>
                <v-chip
                  size="small"
                  class="mt-2"
                  color="success"
                  label
                  role="status"
                  aria-label="Project status: Deployed"
                >
                  Deployed
                </v-chip>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>
