import request from 'supertest';
import server from '../../server';

describe('POST /api/products', () => {
    it('Should Display Validation Error', async () => {
        //Conecto al sv y hago un post a la url /api/product enviandole el body VACIO
        const response = await request(server).post('/api/products').send({})
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(4)

        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(2)
    })


    it('Should validate that the price is greater than 0', async () => {
        //Conecto al sv y hago un post a la url /api/product enviandole el body VACIO
        const response = await request(server).post('/api/products').send({
            name: "Monitor Muy Curvo",
            price: 0
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)

        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(2)
    })


    it('Should validate that the price is a Number and greater than 0', async () => {
        //Conecto al sv y hago un post a la url /api/product enviandole el body VACIO
        const response = await request(server).post('/api/products').send({
            name: "Monitor Muy Curvo",
            price: "hola"
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(2)

        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(4)
    })


    it('Should create a new Product', async () => {
        //Conecto al sv y hago un post a la url /api/product enviandole el body
        const response = await request(server).post('/api/products').send({
            name: "Mouse - Testing",
            price: 40
        })
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(400)
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('errors')
    })
})

describe('GET /api/products', () => {

    it('Should check if api/products URL exist', async () => {
        const response = await request(server).get('/api/products')
        expect(response.status).not.toBe(404)
    })

    it('GET a JSON response with products', async() => {
        const response = await request(server).get('/api/products')
        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('data')
        expect(response.body.data).toHaveLength(1)

        expect(response.body).not.toHaveProperty('errors')
    })
})
 
describe('GET /api/products/:id', () => {
    it('Should return a 404 response for a non-existent product', async () => {
        const productId = 20000;
        const response = await request(server).get(`/api/products/${productId}`);
        
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty('error')
        expect(response.body.error).toBe('Producto no Encontrado')
        
    })

    it('Should check a valid Id in the URL', async () => {
        const response = await request(server).get('/api/products/not-valid-url')
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0].msg).toBe('ID no Valido')
    })

      it('Get a JSON response for a single product', async () => {
        const response = await request(server).get('/api/products/1')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('data')
    })
})