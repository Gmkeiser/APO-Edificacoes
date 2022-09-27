<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" />
      <q-toolbar-title>
        <h1 class="text-white text-h6">Sala de Aula 1º A</h1>
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-ma-lg q-gutter-sm column">
      <q-btn unelevated color="primary" label="Dimensões" />
      <q-btn unelevated color="primary" label="Equipamentos" />
      <q-btn unelevated color="primary" label="Avaliação da Instalação" />
      <q-btn unelevated color="primary" label="Conservação e Manutenção" />
      <q-btn unelevated color="amber" label="Concluir" class="text-black" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Ambience'
})
</script>