<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" />
      <q-toolbar-title>
        <h1 class="text-white text-h6">Ambientes</h1>
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-md">
      <q-table :rows="rows" :columns="columns" hide-header flat />
      <div class="row q-my-sm q-gutter-sm">
        <q-btn color="amber" label="Adicionar" class="col text-black" unelevated rounded
          @click="addAmbiencePrompt = true" />
        <q-btn color="amber" label="Avaliar" class="col text-black" unelevated rounded />
      </div>
      <div class="row">
        <q-btn color="amber" label="Concluir avaliação" class="col text-black" unelevated rounded />
      </div>
    </div>
    <q-dialog v-model="addAmbiencePrompt">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Adicionar ambiente</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input label="Nome do ambiente" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn flat label="Adicionar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

const columns = [{
  name: 'ambience',
  align: 'left',
  field: row => row,
}]

const rows = [
  'Sala de aula 1º A',
  'Sala de aula 1º A',
  'Sala de aula 2º B',
  'Sala de aula 2º B',
  'Sala dos Professores',
  'Sala de Informática',
  'Labs',
  'Refeitório',
  'Cozinha',
]

export default defineComponent({
  name: 'AmbienceSelection',
  setup() {
    return {
      rows,
      columns,
      addAmbiencePrompt: ref(false),
    }
  }
})

</script>

