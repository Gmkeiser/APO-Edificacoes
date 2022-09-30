<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" />
      <q-toolbar-title class="text-white">
        Prefeitura de Jambu
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-lg fit column justify-center items-center content-center">
      <q-card
        class="q-pa-lg fit column justify-between"
        style="width: 50%; max-width: 512px; height: 320px"
      >
        <div class="q-pa-sm fit column justify-between">
          <q-btn rounded color="blue" label="Ambientes" class="q-pa-md"></q-btn>
        </div>
        <div class="q-pa-sm fit column justify-between">
          <q-btn
            rounded
            color="grey"
            label="Infraestrutura"
            class="q-pa-md"
          ></q-btn>
        </div>
        <div class="q-pa-sm fit column justify-between">
          <q-btn
            rounded
            color="yellow"
            label="Segurança"
            class="q-pa-md"
            style="width=100%"
          ></q-btn>
        </div>
        <div class="q-pa-sm fit column justify-between">
          <q-btn
            rounded
            color="red"
            label="Combate a incêndio"
            class="q-pa-md"
          ></q-btn>
        </div>
        <div class="q-pa-sm fit column justify-between">
          <q-btn
            rounded
            color="green"
            label="Sustentabilidade"
            class="q-pa-md"
          ></q-btn>
        </div>
        <div class="q-pa-sm fit column justify-between">
          <q-btn
            rounded
            color="pink"
            label="Habitabilidade"
            class="q-pa-md"
          ></q-btn>
        </div>
        <div class="q-pa-sm fit column justify-between">
          <q-btn
            rounded
            color="amber"
            label="Concluir"
            class="text-black q-pa-md"
          />
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "SelectPage",
    methods: {
      redirectTo(page) {
        window.location.href = `#${page}`;
      },
    },
  });
  </script>