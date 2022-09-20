<template>
  <header>
    <h1>Ambientes</h1>
  </header>
  <main>
    <table>
      <tr>
        <td>Sala de Aula 1º</td>
      </tr>
      <tr>
        <td>Sala de Aula 2º</td>
      </tr>
      <tr>
        <td>Sala dos Professores</td>
      </tr>
      <tr>
        <td>Sala Informática</td>
      </tr>
      <tr>
        <td>Labs</td>
      </tr>
      <tr>
        <td>Refeitório</td>
      </tr>
    </table>
  </main>
  <footer>
    <button>Avaliar</button>
    <button>Adicionar</button>
    <button>Concluir Avaliação</button>
  </footer>
</template>

<style>
* {
  margin: 0;
}

header {
  background-color: #0C93FB;
  display: grid;
  place-items: center;
  height: 7vh;
}

h1 {
  font-size: 1.5rem;
  color: #003A66;
}

main {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 1rem;
}

table {
  width: 100%;
  background-color: #005DA4;
  border-radius: 10px;
  max-width: 512px;
  margin-top: 12%;
}

td {
  padding: 0.5rem;
  color: white;
  text-align: center;
  font-size: 1.25rem;
  border-bottom: #707070 solid 1px;
}

footer {
  display: grid;
  place-items: center;
  padding: 1rem;
}

button {
  margin-top: 1rem;
  padding: 1rem;
  width: 75vw;
  max-width: 256px;
  background-color: #FFBF00;
  border: none;
  border-radius: 3rem;
  font-weight: bold;
  font-size: 1rem;
  font-family: serif;
}

</style>