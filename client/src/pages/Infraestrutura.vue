<template>
  <q-toolbar class="bg-primary">
    <q-btn dense rounded flat icon="arrow_back" color="white" />
    <q-toolbar-title>
      <h1 class="text-white text-h6">Infraestrutura</h1>
    </q-toolbar-title>
  </q-toolbar>
  <div class="flex align-center justify-center">
    <div class="q-ma-md" style="width: 100%; max-width: 512px">
      <div v-for="item in infraestrutura">
        <q-card class="q-mb-md">
          <q-card-section>
            <span class="text-h6">{{ item.title }}</span>
          </q-card-section>
          <q-separator />
          <q-card-section class="row q-gutter-md">
            <q-select class="col" label="Existe" :options="exists" />
            <q-select class="col" label="Funciona" :options="itWorks" />
            <q-select class="col" label="Tipo" :options="type" />
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

const infraestrutura = [
  {
    title: 'Abastecimento de Água',
  },
  {
    title: 'Esgoto sanitário',
  },
  {
    title: 'Energia',
  },
  {
    title: 'Sistema de Telecomunicação',
  },
  {
    title: 'Sistema de águas pluviais',
  },
]

export default defineComponent({
  name: 'Infraestrutura',
  data() {
    return{
      infraestrutura,
      exists: ['Sim', 'Não'],
      itWorks: ['Sim', 'Não'],
      type: ['Público', 'Privado'],
    }
  }
});
</script>
