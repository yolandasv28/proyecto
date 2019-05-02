import {Response, Request} from 'express';
import {Cliente} from '../config/sequelize';
export var controller_cliente = {
    create: (req:Request, res:Response)=>{
        //creando una instancia u obj de la clase cliente
        //OJO=> Solo es instancia, no se guardó en la BD
        let objcliente = Cliente.build(req.body);
        console.log(objcliente);
        objcliente.saludar();
        //guardando al objeto en la BD
        objcliente.save().then((clienteCreada:any)=>{
            if(clienteCreada){
                let response = {
                    message:'created',
                    content:clienteCreada
                }
                res.status(201).send(response);
            }else{
                let response = {
                    message:'error',
                    content:'error al crear la cliente'
                }
                res.status(500).send(response);
            }                        
        })
    },
}