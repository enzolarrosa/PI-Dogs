const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./Dogs')
const temperaments= require('./Temperaments')
const dog= require('./Dog')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs);
router.use('/dogs', dog)
router.use('/temperaments', temperaments)


module.exports = router;
