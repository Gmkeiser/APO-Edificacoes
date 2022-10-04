<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" @click="redirectTo('/home')"/>
      <q-toolbar-title>
        <h1 class="text-white text-h6">Sala de Aula 1º A</h1>
      </q-toolbar-title>
    </q-toolbar>
    <div class="flex justify-center">
      <div class="q-ma-lg column" style="width: 100%; max-width: 512px">
        <div class="row q-gutter-sm q-mb-sm">
          <q-btn
            id="square"
            unelevated
            class="col"
            color="primary"
            label="Dimensões"
            @click="redirectTo('/ambience/dimensions')"
          />
          <q-btn
            id="square"
            unelevated
            class="col"
            color="primary"
            label="Equipamentos"
            @click="redirectTo('/ambience/equipamentos')"
          />
        </div>
        <div class="row q-gutter-sm q-mb-sm">
          <q-btn
            id="square"
            unelevated
            class="col"
            color="primary"
            label="Avaliação da Instalação"
            @click="redirectTo('/ambience/instalacao')"
          />
          <q-btn
            id="square"
            unelevated
            class="col"
            color="primary"
            label="Conservação e Manutenção"
            @click="redirectTo('/ambience/conservacao')"
          />
        </div>
        <q-btn
          unelevated
          color="amber"
          label="Concluir"
          class="text-black"
          @click="redirectTo('/home')"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Ambience",
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
  },
});
</script>

<style>
#square {
  height: 100px;
}
</style>
