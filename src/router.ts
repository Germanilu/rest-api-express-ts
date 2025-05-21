import {Router} from 'express'

// Creo una instancia del router
const router = Router()

// ========== RUTAS ==========//
router.get('/', (req,res) => {

    res.json('desde GET')
})

router.post('/', (req,res) => {

    res.json('desde POST')
})

router.put('/', (req,res) => {

    res.json('desde put')
})

router.patch('/', (req,res) => {

    res.json('desde patch')
})

router.delete('/', (req,res) => {

    res.json('desde delete')
})

export default router