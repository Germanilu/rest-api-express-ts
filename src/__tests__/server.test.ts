//EJEMPLO TEST JEST
//RUN WITH npm test
// //Sirve para agrupar los tests
// describe('Nuestro primer test',() => {
//     //El Test se puede utilizar tanto test() como it()
//     it('Debe revisar que 1 + 1 sean 2', () => {
//         expect(1+1).toBe(2)
//     })

//     it('Debe revisar que 1 + 1 no sean 3', () => {
//         expect(1+1).not.toBe(3)
//     })
// })

import request from 'supertest';
import server from '../server';
import { connectDB } from '../server';
import db from '../config/db';

describe('GET /api', () => {
    it('Should send back a json response', async () => {
        //Hago una request al server con supertest y recupero el endpoint /api. En res se almacenan todos los datos del servidor
        const res = await request(server).get('/api')

        //Me espero que res.status devuelva 200
        expect(res.status).toBe(200)
        //Me espero que en el content-type de los headers exista json
        expect(res.headers['content-type']).toMatch(/json/)
        //Me espero que el mensaje del body que devuelve sea "Desde API"
        expect(res.body.msg).toBe('Desde API')

        //Aqui tambien pruebo lo contrario, que la respuesta NO sea un 404 y que el texto NO sea "desde api"
        expect(res.status).not.toBe(404)
        expect(res.body.msg).not.toBe("desde api")
    })
})


/**
 * Con esto puedo testear el fallo al conectarse a la base de datos. 
 * Fuerzo una simulacion de fallo con jest.mock cuando se conecta al DB 
 */

//Creo el Mock y importo la configuracion
jest.mock('../config/db')

describe('connectDB', () => {
    it('Should handle database connection error', async () => {
        //Creo una spy y espero que se ejecute el catch forzando la ejecucion 
        jest.spyOn(db,'authenticate').mockRejectedValueOnce(new Error('Hubo un error al conectar al DB'))
        //Creo un segundo spy que espera al console.log del catch y lo añade a una constante
        const consoleSpy = jest.spyOn(console,'log')
        //Llamo la conexion a la db una vez tenga creados los spy
        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Hubo un error al conectar al DB')
        )
    })
})