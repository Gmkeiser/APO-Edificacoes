<template>
  <q-toolbar class="bg-primary">
    <q-btn dense rounded flat icon="arrow_back" color="white" />
    <q-toolbar-title>
      <h1 class="text-white text-h6">Sustentabilidade</h1>
    </q-toolbar-title>
  </q-toolbar>
  <div class="flex align-center justify-center">
    <div class="q-ma-md" style="width: 100%; max-width: 512px">
      <div v-for="card in cards">
        <q-card class="q-mb-md">
          <q-card-section>
            <span class="text-h6">{{ card.title }}</span>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-radio v-model="card.option" val="good" label="Bom" />
            <q-radio v-model="card.option" val="regular" label="Regular" />
            <q-radio v-model="card.option" val="bad" label="Ruim" />
            <q-radio v-model="card.option" val="null" label="Nulo" />
          </q-card-section>
        </q-card>
      </div>
      <div class="column">
        <q-btn label="Concluir avaliação" color="amber" class="text-black" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

const cards = [
  {
    title: 'Eficiência energética',
    option: '',
  },
  {
    title: 'Sistema de Gestão Ambiental',
    option: '',
  },
  {
    title: 'Destinação de Residuos',
    option: '',
  },
  {
    title: 'Gestão de Captação de Chuva',
    option: '',
  },
];

export default defineComponent({
  name: 'Sustentability',
  data() {
    return {
      cards,
    }
  }
});
</script>
