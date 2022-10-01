<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" @click="redirectTo('/home')"/>
      <q-toolbar-title>
        <h1 class="text-white text-h6">Escolas Cadastradas</h1>
      </q-toolbar-title>
    </q-toolbar>
    <div class="flex justify-center">
      <div class="q-pa-lg column" style="max-width: 512px; width: 100%">
        <q-input v-model="search" label="Pesquisar">
          <template v-slot:append>
            <q-btn dense rounded flat icon="search" />
          </template>
        </q-input>
        <div class="q-my-sm q-gutter-sm">
          <q-radio v-model="searchBy" val="name" label="Nome" />
          <q-radio v-model="searchBy" val="address" label="Endereço" />
        </div>
        <q-table
          flat
          class="q-my-lg"
          hide-header
          hide-pagination
          :rows="rows"
          :columns="column"
          @row-click="handleSchool"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

const column = [
  {
    name: "school",
    align: "left",
    field: (row) => row,
  },
];

const rows = [
  "Escola Paulo Pedro",
  "Escola Pedro Alves",
  "Escola João e Maria",
];

export default defineComponent({
  name: "SchoolsList",
  data() {
    return {
      rows,
      column,
      search: ref(""),
      searchBy: ref("name"),
    };
  },
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
    handleSchool(_evt, _row) {
      this.redirectTo('/school');
    },
  }
});
</script>
