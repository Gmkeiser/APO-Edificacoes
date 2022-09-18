<template>
  <div id="container">
    <header>
      <h1>Prefeitura de Jambu</h1>
    </header>
    <main>
      <div class="box">
        <div class="icon"></div>
        <div class="text">
          <h2>Cadastrar Nova Escola</h2>
          <p>Para primeira avaliação cadastrar escola</p>
        </div>
      </div>
      <div class="box">
        <div class="icon"></div>
        <div class="text">
          <h2>Avaliação de Escola</h2>
        </div>
      </div>
    </main>
    <button>Meu Perfil</button>
  </div>
</template>

<style>
* {
  margin: 0;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}


header {
  background-color: orange;
  padding: 2rem;
  height: 10%;
}

h1 {
  font-size: 1.5rem;
  text-align: right;
}

main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

button {
  margin: 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: orange;
  border: none;
  padding: 0.75rem 0;
  font-family: serif;
  border-radius: 10px;
}

.box {
  background-color: #1e78ff;
  margin: 1.5rem;
  height: 150px;
  display: grid;
  grid-template-columns: 25% 75%;
  width: 100%;
  max-width: 600px;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
}

.icon {
  background-color: #bd2323;
}

h2,
p {
  color: white;
  text-align: center;
}
</style>
