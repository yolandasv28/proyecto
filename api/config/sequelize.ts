import { usuario_model } from '../models/usuario';
import { cliente_model } from '../models/cliente';


const Sequelize = require('sequelize');

const sequelize = new Sequelize('placedb','root','admin',{
    host:'localhost',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    timezone: '-05:00'
});

export const Usuario = usuario_model(sequelize, Sequelize);
export const Cliente = cliente_model(sequelize, Sequelize);


sequelize.query('SET FOREIGN_KEY_CHECKS = 0', {raw:true}).then(()=>{
    // force == true: cada vez que el proyecto inicie (npm star), toda la data y tablas, se van a borrar y crear nuevamente.
    // force == false: solo va crear las tablas y/o campos que no figuren actualmente en nuestra base de datos. No se borran los datos.
    sequelize.sync({force:false}).then(()=>{
        console.log("Base de datos creada con éxito");
    }).catch(()=>{
        console.log();
    });
});
