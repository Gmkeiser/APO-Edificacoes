<template>
  <q-toolbar class="bg-primary">
    <q-btn
      dense
      rounded
      flat
      color="white"
      icon="arrow_back"
      @click="redirectTo('/ambience')"
    />
    <q-toolbar-title>
      <h1 class="text-white text-h6">Sala de Aula 1º A</h1>
    </q-toolbar-title>
  </q-toolbar>

  <div class="flex justify-center">
    <div class="column q-ma-lg" style="width: 100%; max-width: 512px">
      <q-card class="q-mb-lg">
        <q-card-section>
          <span class="text-h6">Dimensões (m)</span>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-form class="q-gutter-sm">
            <q-input outlined type="number" label="Largura" />
            <q-input outlined type="number" label="Comprimento" />
            <q-input outlined type="number" label="Pé-direito" />
          </q-form>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <span>Área: 49m²</span>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat color="primary" label="Confirmar" />
        </q-card-actions>
      </q-card>

      <q-card class="q-mb-lg">
        <q-card-section>
          <span class="text-h6">Parede Altura Barra Lavável (m)</span>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-input outlined type="number" />
        </q-card-section>
      </q-card>

      <q-card class="q-mb-lg">
        <q-card-section>
          <span class="text-h6">Esquadrias (m)</span>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-gutter-sm">
          <q-select outlined label="Tipo" :options="['Porta', 'Janela']" />
          <q-select outlined label="Largura" :options="[0.9, 6]" />
          <q-select outlined label="Altura" :options="[1.7, 2.1]" />
          <q-select outlined label="Peitoril" :options="['-', 1.25]" />
          <q-select outlined label="Quantidade" :options="[1, 2]" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat color="primary" label="Adicionar" />
        </q-card-actions>
      </q-card>

      <q-card class="q-mb-lg">
        <q-card-section>
          <span class="text-h6">Ventilação Cruzada</span>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-radio label="Sim" />
          <q-radio label="Não" />
        </q-card-section>
      </q-card>

      <q-card class="q-mb-lg">
        <q-card-section>
          <span class="text-h6">Iluminação Artificial</span>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-form class="q-gutter-sm">
            <q-input outlined type="number" label="Luminárias" />
            <q-input outlined type="number" label="Lâmpadas" />
            <q-input outlined type="number" label="Potência (W)" />
          </q-form>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat color="primary" label="Adicionar" />
        </q-card-actions>
      </q-card>

      <q-card class="q-mb-lg">
        <q-card-section>
          <span class="text-h6">Quantidade de Tomadas</span>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-input outlined type="number" />
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat color="primary" label="Adicionar" />
        </q-card-actions>
      </q-card>

      <q-btn color="amber" class="text-black" label="Concluir" @click="redirectTo('/ambience')"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dimensions",
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
  },
});
</script>
