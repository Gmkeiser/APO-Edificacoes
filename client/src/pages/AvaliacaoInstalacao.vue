<template>
  <q-toolbar class="bg-primary">
    <q-btn
      dense
      rounded
      flat
      color="white"
      icon="arrow_back"
      @click="redirectTo('/ambience')"
    />
    <q-toolbar-title>
      <h1 class="text-white text-h6">Sala de Aula 1º A</h1>
    </q-toolbar-title>
  </q-toolbar>
  <div class="flex justify-center">
    <div class="column q-ma-lg" style="width: 100%; max-width: 512px;">
      <q-card class="q-mb-lg" v-for="label in labels">
        <q-card-section>
          <span class="text-h6">{{ label }}</span>
        </q-card-section>
        <q-separator />
        <q-card-section class="row q-gutter-md">
          <q-select class="col" label="Tipo" />
          <q-select class="col" label="Condição" />
        </q-card-section>
      </q-card>
      <q-btn color="amber" class="text-black" label="Concluir" @click="redirectTo('/ambience')"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

const labels = [
  'Piso',
  'Parede',
  'Revestimento',
  'Forro',
  'Pintura',
  'Esquadrias (Janelas)',
  'Esquadrias (Porta)',
];

export default defineComponent({
  name: "AvaliacaoInstalacao",
  data() {
    return {
      labels,
    }
  },
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
  },
});
</script>
