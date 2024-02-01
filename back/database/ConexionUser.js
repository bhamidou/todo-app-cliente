require('dotenv').config()
const { Sequelize, Op } = require('sequelize');
const models = require('../models/index.js');

class ConexionSequilze {

    constructor() {
        this.db = new Sequelize(process.env.DB_DEV, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect:process.env.DB_DIALECT,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
             },
          });
    }

    conectar = () => {
        this.db.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    }

    desconectar = () => {
        //this.db.close();
        process.on('SIGINT', () => conn.close())
    }

    getlistado = async() => {
        let resultado = [];
        this.conectar();
        console.log(`Accediendo a los datos...`)
        resultado = await models.User.findAll({
            attributes: ['id', 'name', 'email']
          });
        this.desconectar();
        return resultado;
    }

    getUsuario = async(id) => {
        let resultado = [];
        this.conectar();
        resultado = await models.User.findByPk(id,{
            attributes: ['id', 'name', 'email']
        });
        this.desconectar();
        if (!resultado){
            throw error;
        }
        return resultado;
    }
    getUserByEmail = async(emailUser) => {
        let resultado = [];
        try{
            this.conectar();
            resultado = await models.User.findOne({ attributes:['id', 'name','email'],
                where: { email: emailUser } });
            this.desconectar();
            
        }catch(error){
            console.log(error)
            if (!resultado){
                throw error;
            }
        }finally{
            if(resultado == null){
                throw new Error('Usuario no encontrado')
            }
        }
        return resultado;
    }

    registrarUsuario = async(body) => {
        let resultado = 0;
        let usuarioNuevo = 0
        this.conectar();
        try{
            usuarioNuevo = await models.User.create(body);

        } catch (error) {
            if (error instanceof Sequelize.UniqueConstraintError) {
                console.log(`El id ${body.id} ya existe en la base de datos.`);
            } else {
                console.log('Ocurrió un error desconocido: ', error);
            }
            throw error; 
        } finally {
            this.desconectar();
        }
        return usuarioNuevo;
    }

    modificarUsuario = async(id, body) => {
        this.conectar();
        let resultado = await models.User.findByPk(id);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return resultado;
    }

    borrarUsuario = async(id) => {
        this.conectar();
        let resultado = await models.User.findByPk(id);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        this.desconectar();
        return resultado;
    }

    addRolUser = async(userId, rolId) => {
        this.conectar();
        const rolUser = {user_id: userId, rol_id: rolId}
        console.log(rolUser)
        let resultado = await models.RolUser.create(rolUser);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        this.desconectar();
        return resultado;
    }

    showRolUser = async(userId) => {
        this.conectar();
        let resultado = await models.RolUser.findAll({ where: { user_id: userId } });
        if (!resultado){
            this.desconectar();
            throw error;
        }
        this.desconectar();
        return resultado;
    }


}

module.exports = ConexionSequilze;
