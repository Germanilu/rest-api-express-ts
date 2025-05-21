import {Sequelize} from 'sequelize';

// Conexion al db, se le añade al final de la url ?ssl=true para que no de error al conectar
const db = new Sequelize('postgresql://rest_api_node_typescript_suze_user:FdMTU9GpKb8Uimu72uSjtJUV46IrhMA9@dpg-d0mr6mmuk2gs73ftolc0-a.frankfurt-postgres.render.com/rest_api_node_typescript_suze?ssl=true')

export default db;