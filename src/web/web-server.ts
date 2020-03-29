import express from 'express'
import path from 'path'
import { getToken } from '../google'
import Config from '../config'

const port = Config.PORT

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../../views'))

app.get('/', (req, res) => {
  const tokenExists = !!getToken()
  res.render('index', { tokenExists: tokenExists })
})

app.listen(port, () => console.log(`Listen at port ${port}`))
