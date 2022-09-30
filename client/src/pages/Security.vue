<template>
  <q-toolbar class="bg-primary">
    <q-btn dense rounded flat icon="arrow_back" color="white" />
    <q-toolbar-title>
      <h1 class="text-white text-h6">Segurança</h1>
    </q-toolbar-title>
  </q-toolbar>
  <div class="flex align-center justify-center">
    <div class="q-ma-md" style="max-width: 512px">
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
    title: 'Controle de entrada e saida de alunos',
    option: '',
  },
  {
    title: 'Controle de entrada de pessoas estranhas',
    option: '',
  },
  {
    title: 'Vigilância para o período diurno',
    option: '',
  },
  {
    title: 'Vigilância para o período noturno',
    option: '',
  },
  {
    title: 'Vigilância para os finais de semana e feriados',
    option: '',
  },
  {
    title: 'Esquema de policiamento para inibição de furtos, roubos e outras formas de violência',
    option: '',
  },
  {
    title: 'Esquema de policiamento para inibição de tráfico de tóxicos/drogas dentro da escola',
    option: '',
  },
  {
    title: 'Esquema de policiamento para inibição de tráfico de tóxicos/drogas nas imediações da escola',
    option: '',
  },
  {
    title: 'Mecanismo de proteção para equipamentos mais caros',
    option: '',
  },
  {
    title: 'Segurança nas suas imediações',
    option: '',
  },
];

export default defineComponent({
  name: 'Security',
  data() {
    return {
      cards,
    }
  }
});
</script>
