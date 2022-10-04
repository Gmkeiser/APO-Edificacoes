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
          <q-input filled v-model="date" placeholder="dd/mm/yyyy" class="q-pa-sm">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input label="Tipo do piso:" class="q-pa-sm"></q-input>
          <q-input label="Condição do piso:" class="q-pa-sm"></q-input>
          <q-input label="Tipo do revestimento:" class="q-pa-sm"></q-input>
          <q-input label="Condição do revestimento:" class="q-pa-sm"></q-input>
          <q-input label="Tipo do forro:" class="q-pa-sm"></q-input>
          <q-input label="Condição do forro:" class="q-pa-sm"></q-input>
          <q-input label="Tipo da pintura:" class="q-pa-sm"></q-input>
          <q-input label="Condição da pintura:" class="q-pa-sm"></q-input>
          <q-input label="Tipo de esquadria(janela):" class="q-pa-sm"></q-input>
          <q-input label="Condição da esquadria(janela):" class="q-pa-sm"></q-input>
          <q-input label="Tipo de esquadria(porta):" class="q-pa-sm"></q-input>
          <q-input label="Condição da esquadria(porta):" class="q-pa-sm"></q-input>
          <q-input label="Tipo da porta:" class="q-pa-sm"></q-input>
          <q-input label="Condição da porta:" class="q-pa-sm"></q-input>
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
    name: "inst",
    methods: {
      redirectTo(page) {
        window.location.href = `#${page}`;
      },
    },
  });
  </script>
  