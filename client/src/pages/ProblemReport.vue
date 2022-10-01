<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" @click="redirectTo('/school')" />
      <q-toolbar-title class="text-white">
        Escola João e Maria
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-lg fit column justify-center items-center content-center">
      <q-card class="column q-pa-lg" style="width: 100%; max-width: 512px">
        <h1 class="text-h6">Relato de problema</h1>
        <q-separator />
        <q-form>
          <q-select
            v-model="ambience"
            class="q-my-md"
            label="Ambiente"
            :options="ambienceOptions"
          />
          <q-select
            v-model="problemType"
            class="q-my-md"
            label="Tipo do problema"
            :options="problemTypeOptions"
          />
          <q-input
            v-model="problemDescription"
            label="Descrição do problema"
            type="textarea"
          />
        </q-form>
        <q-btn
          color="amber"
          label="Concluir"
          class="text-black q-mt-lg"
          @click="redirectTo('/school')"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

const ambienceOptions = [
  "Sala de Aula 1º A",
  "Sala de Aula 2º A",
  "Sala de Aula 1º B",
  "Sala de Aula 2º B",
  "Sala dos Professores",
  "Sala Informática",
  "Labs",
  "Informática",
  "Refeitório",
];

const problemTypeOptions = [
  "Elétrico",
  "Hidráulico",
  "Estrutura",
  "Acabamento",
  "Limpeza",
  "Equipamentos",
];

export default defineComponent({
  name: "ProblemReport",
  data() {
    return {
      ambience: "",
      problemType: "",
      problemDescription: "",
      ambienceOptions,
      problemTypeOptions,
    };
  },
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
  },
});
</script>
