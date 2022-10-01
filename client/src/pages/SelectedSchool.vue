<template>
  <q-toolbar class="bg-primary">
    <q-btn
      dense
      rounded
      flat
      color="white"
      icon="arrow_back"
      @click="redirectTo('/home')"
    />
    <q-toolbar-title>
      <h1 class="text-white text-h6">Escola João e Maria</h1>
    </q-toolbar-title>
  </q-toolbar>
  <div class="flex align-center justify-center">
    <div class="q-ma-lg column" style="width: 100%; max-width: 512px">
      <q-card class="q-mb-md">
        <q-card-section>
          <span class="text-h6">Avaliação de Monitoramento</span>
        </q-card-section>
      </q-card>
      <q-card class="q-mb-md" @click="redirectTo('/school/problems')">
        <q-card-section>
          <span class="text-h6">Relato de Problemas</span>
        </q-card-section>
      </q-card>
      <q-card class="q-mb-md">
        <q-card-section>
          <span class="text-h6">Consultar Histórico</span>
        </q-card-section>
      </q-card>
      <q-btn
        color="amber"
        class="text-black"
        label="Concluir"
        @click="redirectTo('/home')"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectedSchool",
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
  },
});
</script>
