import cors from 'cors'
import express from 'express'

import { dowload } from './download.js'

const app = express()
app.use(cors())

app.get('/summary/:id', (request, response) => {
  dowload(request.params.id)
  
  response.json({result: "Dowload do vídeo realizado com sucesso!"})
})

app.listen(3333, () => console.log('Server is running on port 3333'))