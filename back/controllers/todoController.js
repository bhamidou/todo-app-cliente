const {response,request} = require('express');
const Conexion = require('../database/ConexionTodo')
const jwt = require("jsonwebtoken");
const progressSalt = 10 ;
const todoStatusFinish = 3 ;

const tasksGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getTasks()    
        .then( msg => {
            res.status(200).json(msg);
        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}

const taskById =  (req, res = response) => {
    const conx = new Conexion();

    conx.getTask(req.params.id)    
        .then( msg => {
            res.status(200).json(msg);
        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}

const createTask =  (req, res = response) => {
    const conx = new Conexion();

    conx.createTask(req.body)    
        .then( msg => {
            res.status(200).json(msg.dataValues);
        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}


const updateTask =  (req, res = response) => {
    const conx = new Conexion();

    conx.updateTask(req.params.id ,req.body)
        .then( msg => {
            res.status(200).json(msg.dataValues);
        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}
const deleteTask =  (req, res = response) => {
    const conx = new Conexion();

    conx.deleteTask(req.params.id)
        .then( msg => {
            res.status(200).json(msg.dataValues);
        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}
const getTaskPending =  (req, res = response) => {
    const conx = new Conexion();

    conx.getTaskPending()
        .then( msg => {
            res.status(200).json(msg);
        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}

const asignTask =  (req, res = response) => {
    const conx = new Conexion();

    // let roles = req.uroles
    // let i = 0
    // let checkAdmin = false
    // while (i<=roles.length){
    //     if(roles[i]==1) {
    //         checkAdmin = true
    //     }
    //     i++
    // }
    let taskId = req.body.id
    console.log(taskId)
    conx.asignTask(taskId, req.userId)
            .then( msg2 => {
                res.status(200).json(msg2.dataValues);
            })
            .catch( err => {
                console.log(err)
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    // conx.getTask(req.params.id).then(msg =>{
    //     if (msg.dataValues.status == 0 || checkAdmin){
    //     }else{
    //         res.status(400).json({'msg':'This task is asigned to other user'});

    //     }

    // }).catch( err => {
    //     res.status(203).json({'msg':'No se han encontrado registros'});
    // });

}
const finishTodo =  (req, res = response) => {
    const conx = new Conexion();

    conx.finishTodo(req.body.todoId)
        .then( msg => {
            conx.setProgress(req.body.todoId, 100)
                .then( rtnProgress => {
                    let rtnObj = {
                        todo_id: req.params.todoId,
                        status: todoStatusFinish,
                        msg
                    }
                    res.status(200).json(rtnObj);

                })
                .catch( err => {
                    console.log(err)
                    res.status(203).json({'msg':'No se han encontrado registros'});
                });
        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });

}
const addProgress =  (req, res = response) => {
    const conx = new Conexion();
    let progress = req.body.progress
    if(progress == null){
        progress = progressSalt
    }

    conx.setProgress(req.params.todoId, progress)
        .then( msg => {
            res.status(200).json(msg.dataValues);

        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });

}

const myTasks =  (req, res = response) => {
    const conx = new Conexion();
    let userId = req.userId

    conx.getMyTask(userId)
        .then( msg => {
            console.log(msg.todoUser)
            res.status(200).json(msg);

        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });

}

const showFinish = (req, res = response) => {
    const conx = new Conexion();
    let userId = req.userId

    conx.showFinish(userId)
        .then( msg => {
            res.status(200).json(msg);

        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });

}


module.exports = {
    tasksGet,
    taskById,
    createTask,
    updateTask,
    deleteTask,
    getTaskPending,
    asignTask,
    finishTodo,
    addProgress,
    myTasks,
    showFinish
}