require('dotenv').config()
const { Sequelize, Op, where} = require('sequelize');
const models = require('../models/index.js');
const { el } = require('@faker-js/faker');

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

    getTasks = async() => {
        let resultado = [];
        this.conectar();
        resultado = await models.TodoUser.findAll({
            // attributes: ['id', 'title', 'description','time', 'difficulty', 'status', 'createdAt'],
                include:[{
                            model: models.User,
                            as: 'user'
                        },{
                            model: models.Todo,
                            as: 'todo'
                         }
                ]
          });
        this.desconectar();
        return resultado;
    }

    getTask = async(id) => {
        let resultado = [];
        this.conectar();
        resultado = await models.Todo.findByPk(id);
        this.desconectar();
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    createTask = async(body) => {
        let resultado = 0;
        let newTask = 0
        this.conectar();
        try{
            newTask = await models.Todo.create(body);
            resultado = 1;
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
        return newTask;
    }

    updateTask = async(id, body) => {
        this.conectar();
        let resultado = await models.Todo.findByPk(id);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return resultado;
    }

    deleteTask = async(id) => {
        this.conectar();
        let resultado = await models.Todo.findByPk(id);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        this.desconectar();
        return resultado;
    }
    getTaskPending = async() => {
        this.conectar();
        let resultado = await models.Todo.findAll({where:{status:0}});
        if (!resultado){
            this.desconectar();
            throw error;
        }
        this.desconectar();
        return resultado;
    }
    checkTaskPending = async(todoId) => {
        this.conectar();
        let resultado = await models.Todo.findAll({where:{id:todoId, status:0}});
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        this.desconectar();
        return resultado;
    }

    asignTask = async(idTask, userId) => {
        this.conectar();
        
        let resultado = await models.TodoUser.create({user_id:userId, todo_id:idTask});
        let updateTodo = await models.Todo.findByPk(idTask);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await updateTodo.update({status:1});

        this.desconectar();
        return updateTodo;
    }

    finishTodo = async(todoId) => {
        this.conectar();
        let resultado = await models.Todo.findByPk(todoId);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update({status:2});
        this.desconectar();
        return resultado;
    }

    showFinish = async(userId) => {
        this.conectar();
        let resultado = await models.TodoUser.findAll({
            include:[{
            model: models.User,
            as: 'user',
            where:{
                id:userId
            },
            attributes:['id']
        },{
            model: models.Todo,
            as: 'todo',
            where:{
                status:2
            }
         }
]
});
        if (!resultado){
            this.desconectar();
            throw error;
        }
        this.desconectar();
        return resultado;
    }

    setProgress = async(todoId, progress) => {
        this.conectar();
        console.log(todoId, progress)
        let resultado = await models.Todo.findByPk(todoId);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update({progress:progress});
        this.desconectar();
        return resultado;
    }

    getMyTask = async(userId) => {
        this.conectar();
        let resultado = await models.TodoUser.findAll({
            where:{
                user_id:userId
            },
            include:[{
                model: models.User,
                as: 'user'
            },{
                model: models.Todo,
                as: 'todo',
                where: {
                    [Op.or]:[{
                        status:0,
                    },{
                        status:1
                    }
                    ]
                }
             }
    ]
        });
        if (!resultado){
            this.desconectar();
            throw error;
        }
        this.desconectar();
        return resultado;
    }
}

module.exports = ConexionSequilze;
