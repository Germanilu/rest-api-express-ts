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
    })
})