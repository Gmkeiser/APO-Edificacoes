<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" @click="redirectTo('')"/>
      <q-toolbar-title class="text-white">
        Prefeitura de Jambu
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-sm fit column content-center">
      <q-card
        class="q-pa-lg fit column justify-between"
        style="width: 50%; max-width: 512px; height: 1000x"
      >
      <q-btn-dropdown color="primary" label="Sala Atual">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Sala 1</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Sala 2</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Sala 3</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>

        <div class="q-pa-md fit column justify-between">
          <q-list dense bordered padding class="rounded-borders q-pa-sm">
            <q-item clickable v-ripple class="q-pa-sm">
              <q-item-section> 30/08/2022 </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="q-pa-sm">
              <q-item-section> 01/09/2022 </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="q-pa-sm">
              <q-item-section> 02/09/2022</q-item-section>
            </q-item>
          </q-list>
        </div>
        <q-btn
          unelevated
          color="amber"
          label="Nova Inspeção"
          class="text-black"
        />
      </q-card>
    </div>
  </q-page>
</template>
<script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "EquipmentHistory",
    methods: {
      redirectTo(page) {
        window.location.href = `#${page}`;
      },
    },
  });
  </script>