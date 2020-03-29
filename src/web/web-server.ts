import express from 'express'
import path from 'path'
import { getToken, getAuthUrl, saveToken } from '../google'
import Config from '../config'

const port = Config.PORT

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../../views'))

app.get('/', (req, res) => {
  const tokenExists = !!getToken()
  const authUrl = getAuthUrl()
  res.render('index', { tokenExists, authUrl })
})

app.get('/oauth-callback', async (req, res) => {
  const code = req.query.code
  if (!code) {
    return res.status(422).send('Invalid code')
  }
  await saveToken(code)
  return res.redirect('/')
})

app.listen(port, () => console.log(`Listen at port ${port}`))
