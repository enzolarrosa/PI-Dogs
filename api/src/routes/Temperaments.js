const {Router} = require('express')
const { types } = require('../controllers/functions')
const router = Router()
const {Temperament} = require('../db')

router.get('/', async (req,res) => {
    const info =await types()
    const tempe = await Temperament.findAll()
    if(tempe.length !== 0) {return res.json(tempe)}
    info.forEach(async (e) => {
        Temperament.findOrCreate({
        where: {
            name: e.toLowerCase()
        }
    })})
    console.log(info)
    const final= await Temperament.findAll()
    res.json(final)
})

module.exports= router