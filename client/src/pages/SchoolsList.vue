<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" />
      <q-toolbar-title>
        <h1 class="text-white text-h6">Escolas Cadastradas</h1>
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-lg column">
      <q-input label="Pesquisar">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <div class="q-my-sm q-gutter-sm">
        <q-radio v-model="searchBy" val="name" label="Nome" />
        <q-radio v-model="searchBy" val="address" label="Endereço" />
      </div>
      <q-btn unelevated color="amber" label="Pesquisar" class="text-black" />
      <q-table flat class="q-my-lg" :columns="column" :rows="rows" hide-pagination />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

const column = [
  {
    name: 'school',
    align: 'left',
    label: 'Resultado da Busca',
    field: row => row.school,
  }
];

const rows = [
  {
    school: 'Escola Paulo Pedro'
  },
  {
    school: 'Escola Pedro Alves'
  },
  {
    school: 'Escola João e Maria'
  },
];

export default defineComponent({
  name: 'SchoolsList',
  setup() {
    return {
      rows,
      column,
      searchBy: ref('name'),
    }
  }
});
</script>
