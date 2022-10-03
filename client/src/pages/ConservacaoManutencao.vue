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
  <div class="column q-ma-lg">
    <q-card class="q-mb-lg">
      <q-card-section>
        <span class="text-h6">Conservação e Manutenção</span>
      </q-card-section>
      <q-separator />
      <q-card-section class="row q-gutter-sm">
        <q-input outlined class="col" label="Elemento" />
        <q-input outlined class="col" label="Tamanho" />
        <q-input outlined class="col" label="Não conformidade" />
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat color="primary" label="Adicionar" />
      </q-card-actions>
    </q-card>
    <q-btn
      color="amber"
      class="text-black"
      label="Concluir"
      @click="redirectTo('/ambience')"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConservacaoManutencao",
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
  },
});
</script>
