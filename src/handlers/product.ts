import {Request, Response} from 'express'
import Product from '../models/Product.model'


export const getProducts = async (req: Request,res: Response) => {
    //Hago una consulta a la BBDD y añado ordenacion/limite/atributos a la consulta SQL
    const products = await Product.findAll({
        order: [
            ['price','DESC']
        ],
        limit:20,
        attributes:{exclude:['createdAt', 'updatedAt']}
    })
    res.json({data: products})
}


export const getProductById = async (req: Request,res: Response) => {
    //Obtengo el producto
    const {id} = req.params
    const product = await Product.findByPk(id)
    //Reviso que exista
    if(!product){
        res.status(404).json({
            error: 'Producto no Encontrado'
        })
        return 
    }
    res.json({data:product})
}


 export const createProduct = async (req: Request,res: Response) => {
    const product = await Product.create(req.body)
    //La creacion retorna siempre un estado 201
    res.status(201).json({data:product})
}


export const updateProduct = async (req: Request,res: Response) => {
    const {id} = req.params
    const product = await Product.findByPk(id)
    
    if(!product){
        res.status(404).json({
            error: 'Producto no Encontrado'
        })
        return 
    }
    //Actualizo
    await product.update(req.body)
    await product.save()
    res.json({data:product})
}


export const updateAvailability = async (req: Request,res: Response) => {
    const {id} = req.params
    const product = await Product.findByPk(id)

    if(!product){
        res.status(404).json({
            error: 'Producto no Encontrado'
        })
        return 
    }
    //Actualizo con PATCH modificando solo lo que le envio sin modificar el resto del producto
    //En este caso actualizo productAvailability con el valor contrario a lo que tiene en la BBDD
    product.availability = !product.dataValues.availability
    await product.save()
    res.json({data:product})
}


export const deleteProduct = async (req: Request,res: Response) => {
    const {id} = req.params
    const product = await Product.findByPk(id)

    if(!product){
        res.status(404).json({
            error: 'Producto no Encontrado'
        })
        return 
    }
    await product.destroy()
    res.json({data:'Producto Eliminado'})
}

