<template>
    <q-page>
      <q-toolbar class="bg-primary">
        <q-btn dense rounded flat icon="arrow_back" color="white" />
        <q-toolbar-title class="text-white">
          Prefeitura de Jambu
        </q-toolbar-title>
      </q-toolbar>
      <div class="q-pa-sm fit column content-center">
      <q-card class="q-pa-lg fit column justify-between"
          style="width: 50%; max-width: 512px; height: 1000x">
          <q-btn-dropdown color="primary" label="Dia Atual">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>30/08/2022</q-item-label>
              </q-item-section>
            </q-item>
    
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>01/09/2022</q-item-label>
              </q-item-section>
            </q-item>
    
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>02/09/2022</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
          <q-input borderless v-model="text" label="Tipo do piso:" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Condição do piso:" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Tipo das paredes:" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Condição das paredes:" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Tipo do revestimento:" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Condição do revestimento:" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Tipo do forro:" class="q-pa-sm" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Condição do forro:" class="q-pa-sm" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Tipo de pintura:" class="q-pa-sm" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Condição da pintura:" class="q-pa-sm" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Tipo das esquadrias(janelas):" class="q-pa-sm" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Condição das esquadrias(janelas):" class="q-pa-sm" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Tipo das esquadrias(porta):" class="q-pa-sm" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Condição das esquadrias(porta):" class="q-pa-sm" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Tipo da porta:" class="q-pa-sm" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
          <q-input borderless v-model="text" label="Condição da porta:" class="q-pa-sm" :disable="true"/>
          <q-input borderless v-model="text" label="NaN" :disable="true"/>
  
      </q-card>
      </div>
    </q-page>
  </template>
  <script>
    import { defineComponent, ref } from "vue";
    
    export default defineComponent({
      name: "InstDateInfo",
      methods: {
        redirectTo(page) {
          window.location.href = `#${page}`;
        },
      },
    });
    </script>