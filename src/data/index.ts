import {exit} from 'node:process'
import db from '../config/db'

const clearDB = async () => {
    try {
        await db.sync({force:true})
        console.log('Datos eliminados correctamente')
        //Significa que se finalizo el programa Correctamente
        exit(0)
    } catch (error) {
        console.log(error)
        //Significa que se finalizo el programa con errores
        exit(1)
    }
}

/**
 * Creacion CLI nodejs
 * Esto esta relacionado con los script del package.json, al ejecutar en consola npm test 
 * se ejecutara antes el pretest del package.json (al llamarse asi se ejecuta en automatico siempre antes de test y no sirve llamarlo)
 * Al llamar el comando pretest y como 2nd elemento del array se encuentra --clear entonces Limpia la DB
 * 
 * Todo esto sirve para limpiar la db cada vez que lanzo un test de mi API para evitar llenar la BBDD de productos al testear
 */
if(process.argv[2] === '--clear'){
    clearDB()
}