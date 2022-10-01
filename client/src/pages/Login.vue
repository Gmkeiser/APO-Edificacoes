<template>
  <q-page class="flex column flex-center justify-evenly">
    <img alt="Jambu" src="~assets/brasao.svg" />
    <h1 class="text-h4">Faça seu login</h1>
    <q-form>
      <q-input
        v-model="email"
        type="email"
        label="E-mail"
        style="width: 300px"
      />
      <q-input
        icon="eye"
        label="Senha"
        v-model="password"
        style="width: 300px"
        :type="isVisible ? 'text' : 'password'"
      >
        <template v-slot:append>
          <q-btn
            dense
            rounded
            flat
            :icon="isVisible ? 'visibility_off' : 'visibility'"
            @click="isVisible = !isVisible"
          />
        </template>
      </q-input>
    </q-form>
    <a href="">Esqueci minha senha</a>
    <q-btn
      rounded
      unelevated
      label="Login"
      color="amber"
      class="text-black"
      style="width: 200px"
      @click="handleLogin()"
    />
    <div>
      <span>Ainda não tem uma conta? </span>
      <a href="">Cadastre-se</a>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      email: "",
      password: "",
      isVisible: false,
    };
  },
  methods: {
    handleLogin() {
      window.location.href = "/#/home";
    },
  },
});
</script>
