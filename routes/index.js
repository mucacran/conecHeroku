const routes = require('express').Router();

routes.get('/', (req, res) => res.send('Hola panchito desde Routes'))

module.exports=routes;