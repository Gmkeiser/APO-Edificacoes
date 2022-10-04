<template>
  
    <q-page>
      
      <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" />
      <q-toolbar-title class="text-white">
        Prefeitura de Jambu
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-sm fit column justify-center items-center content-center">
    <q-card class="q-pa-lg fit column justify-between" style="width: 50%; max-width: 512px; height: 1000x">
        <h1 class="text-h6" align="center">Relatório de Performance</h1>
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
      data(){
        return {text:0};
      },
      methods: {
        redirectTo(page) {
          window.location.href = `#${page}`;
        },
      },
    });
    </script>