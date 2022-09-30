<template>
  <q-page>
    <q-toolbar class="bg-primary">
        <q-btn dense rounded flat icon="arrow_back" color="white" />
      <q-toolbar-title class="text-white">
        Prefeitura de Jambu
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-lg fit column justify-center items-center content-center">
      <q-card
        class="q-pa-lg"
        style="width: 100%; max-width: 512px; height: 320px;"
        >
        <h1 class="text-h5">Relato de problema</h1>
        <q-form class="q-pa-sm">
          <q-select
            borderless
            v-model="model"
            :options="SchoolsList"
            label="Ambiente"
          />
          <q-select
            borderless
            v-model="model"
            :options="SchoolsList"
            label="Tipo do problema"
          />
          <q-input label="Descrição do problema"></q-input>
          
        </q-form>
        <div class="fit column content-center">
        <q-btn rounded color="amber" label="Concluir" class="text-black float"/>
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProblemReport",
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
  },
});
</script>
