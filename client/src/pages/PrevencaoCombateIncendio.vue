<template>
  <q-toolbar class="bg-primary">
    <q-btn dense rounded flat icon="arrow_back" color="white" @click="redirectTo('/school/options')"/>
    <q-toolbar-title>
      <h1 class="text-white text-h6">Prevenção e Combate a Incêndio</h1>
    </q-toolbar-title>
  </q-toolbar>
  <div class="q-ma-md column">
    <q-card class="q-mb-md">
      <q-card-section>
        <span class="text-h6">Controle de entrada e saída de alunos</span>
      </q-card-section>
      <q-separator />
      <q-card-section class="row q-gutter-md">
        <q-select label="Possui" :options="['Sim', 'Não']" class="col" />
        <q-input type="number" label="Quantidade" class="col" />
      </q-card-section>
    </q-card>
    <q-card class="q-mb-md">
      <q-card-section>
        <span class="text-h6">Sinalização</span>
      </q-card-section>
      <q-separator />
      <q-card-section class="row q-gutter-md">
        <q-select label="Possui" :options="['Sim', 'Não']" class="col" />
      </q-card-section>
    </q-card>
    <q-card class="q-mb-md">
      <q-card-section>
        <span class="text-h6">Saídas de Emergência</span>
      </q-card-section>
      <q-separator />
      <q-card-section class="row q-gutter-md">
        <q-select label="Possui" :options="['Sim', 'Não']" class="col" />
        <q-input type="number" label="Quantidade" class="col" />
        <q-select label="Tipo" :options="['Barra']" class="col" />
      </q-card-section>
    </q-card>
    <q-card class="q-mb-md">
      <q-card-section>
        <span class="text-h6">Extintores</span>
      </q-card-section>
      <q-separator />
      <q-card-section class="row q-gutter-md">
        <q-select label="Possui" :options="['Sim', 'Não']" class="col" />
        <q-input type="number" label="Quantidade" class="col" />
        <q-select label="Tipo" :options="['BC']" class="col" />
      </q-card-section>
    </q-card>
    <q-card class="q-mb-md">
      <q-card-section>
        <span class="text-h6">Abrigo de Mangueiras</span>
      </q-card-section>
      <q-separator />
      <q-card-section class="row q-gutter-md">
        <q-select label="Possui" :options="['Sim', 'Não']" class="col" />
        <q-input type="number" label="Quantidade" class="col" />
      </q-card-section>
    </q-card>
    <q-btn label="Concluir avaliação" color="amber" class="text-black" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PrevencaoCombateIncendio',
  methods: {
      redirectTo(page) {
        window.location.href = `#${page}`;
      },
    },
  data() {
    return {
      exists: ref(false),
    }
  }
});
</script>
