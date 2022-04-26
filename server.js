const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

express()/*
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))*/
  .get('/', (req, res) => res.send('Hola panchito'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))