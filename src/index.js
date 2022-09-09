const express = require('express')
const { join } = require('path')

const PORT = 3000
const app = express()

app.use(express.static('public/assets'))

function makeRoute(path, filename)
{
  app.get(path, (_request, response) => {
    response.sendFile(join(__dirname, '..', 'public', filename))
  })
}

makeRoute('/', 'login.html')
makeRoute('/home', 'pagina_inicial.html')

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
