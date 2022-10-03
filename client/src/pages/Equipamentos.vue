<template>
  <q-toolbar class="bg-primary">
    <q-btn
      dense
      rounded
      flat
      icon="arrow_back"
      color="white"
      @click="redirectTo('/ambience')"
    />
    <q-toolbar-title>
      <h1 class="text-white text-h6">Sala de Aula 1º A</h1>
    </q-toolbar-title>
  </q-toolbar>
  <div class="flex justify-center">
    <div class="column q-ma-lg" style="width: 100%; width: 512px">
      <q-card class="q-mb-lg" v-for="label in labels">
        <q-card-section>
          <span class="text-h6">{{ label }}</span>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-form class="row q-gutter-sm">
            <q-input
              outlined
              type="number"
              class="col"
              label="Quantidade total"
            />
            <q-input outlined type="number" class="col" label="Com defeitos" />
          </q-form>
        </q-card-section>
      </q-card>
      <q-btn color="amber" class="text-black" label="Concluir" @click="redirectTo('/ambience')"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

const labels = [
  "Carteiras",
  "Mesa e Cadeira (Prof)",
  "Armário",
  "Quadro de Giz",
  "Quadro Mural",
  "Ventilador",
  "Condicionador de Ar",
];

export default defineComponent({
  name: "Equipamentos",
  data() {
    return {
      labels,
    };
  },
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
  },
});
</script>
