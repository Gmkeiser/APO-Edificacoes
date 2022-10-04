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
        <q-input borderless v-model="text" label="Quantidade de mesas de professor:" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Quantidade danificada:" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Quantidade de carteiras:" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Quantidade de carteiras danificadas:" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Quantidade de armarios:" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Quantidade de armarios danificados:" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Quantidade de quadros de giz:" class="q-pa-sm" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Condição dos quadros de giz:" class="q-pa-sm" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Quantidade de quadros de mural:" class="q-pa-sm" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Condição dos quadros de mural:" class="q-pa-sm" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Quantidade de ventiladores:" class="q-pa-sm" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Condição dos ventiladores:" class="q-pa-sm" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Quantidade de condicionadores de ar:" class="q-pa-sm" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>
        <q-input borderless v-model="text" label="Condição de condicionadores de ar:" class="q-pa-sm" :disable="true"/>
        <q-input borderless v-model="text" label="NaN" :disable="true"/>

    </q-card>
    </div>
  </q-page>
</template>
<script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "EquipmentHistoryDateInfo",
    methods: {
      redirectTo(page) {
        window.location.href = `#${page}`;
      },
    },
  });
  </script>