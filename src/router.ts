import {Router} from 'express'
import {body} from 'express-validator'
import { createProduct } from './handlers/product'
import { handleInputErrors } from './middleware'

// Creo una instancia del router
const router = Router()

// ========== RUTAS ==========//
router.get('/', (req,res) => {

    res.json('desde GEeeeeT')
})


router.post('/', 
    // Validación
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),
    handleInputErrors,
    createProduct
)

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