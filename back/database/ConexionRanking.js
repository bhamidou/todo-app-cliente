require('dotenv').config()
const { Sequelize, Op, where} = require('sequelize');
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
        process.on('SIGINT', () => conn.close())
    }

    countTodos = async () => {
        try {
            this.conectar();
    
            const resultado = await models.Todo.count();
    
            this.desconectar();
    
            return resultado;
        } catch (error) {
            console.error('Error en topPending:', error);
            throw error;
        }
    };
    
    countByStatus = async (status) => {
        try {
            this.conectar();
    
            const resultado = await models.Todo.count({
                where:{
                    status:status
                }
            });
    
            this.desconectar();
    
            return resultado;
        } catch (error) {
            console.error('Error en topPending:', error);
            throw error;
        }
    };

    theBest = async() => {
        try {
            this.conectar();
    
            const resultado = await models.TodoUser.findAll({
                attributes: [
                    'user_id',
                    [Sequelize.literal('COUNT(*)'), 'count']
                ],
                include: [{
                        model: models.User,
                        as: 'user',
                        attributes: ['id', 'name'],
                    },
                    {
                        model: models.Todo,
                        as: 'todo',
                        attributes: ['status'],
                        where: {
                            status: 2
                        }
                    }
                ],
                group: ['user.id'],
                order: Sequelize.literal('count DESC'),
                limit:3
            });
    
            this.desconectar();
    
            return resultado;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ConexionSequilze;
