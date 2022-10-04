<template>
  
    <q-page><div class="q-pa-sm fit column justify-center items-center content-center">
      <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" />
      <q-toolbar-title class="text-white">
        Prefeitura de Jambu
      </q-toolbar-title>
    </q-toolbar>
    <q-card class="q-pa-lg fit column justify-between" style="width: 50%; max-width: 512px; height: 1000x">
        
      <q-input borderless v-model="text" label="Relatório de Performance" :disable="true"/>
        <q-input borderless v-model="text" label="Índice de Performance:" :disable="true"/>
        <q-input borderless v-model="text" label="Classificação da Escola:" :disable="true"/>
        <q-input borderless v-model="text" label="Nivel Socioeconômico:" :disable="true"/>
        <q-input borderless v-model="text" label="Nota IDEB:" :disable="true"/>
        <q-input borderless v-model="text" label="Situação da escola:" :disable="true"/>
        
        <q-btn
          unelevated
          color="amber"
          label="Concluir"
          class="text-black"
        />
    </q-card>
</div>
    </q-page>
</template>
<script>
    import { defineComponent, ref } from "vue";
    
    export default defineComponent({
      name: "RatingScreen",
      methods: {
        redirectTo(page) {
          window.location.href = `#${page}`;
        },
      },
    });
    </script>