const {response,request} = require('express');
const Conexion = require('../database/ConexionRanking')


const topPending =  (req, res = response) => {
    const conx = new Conexion();
    conx.countByStatus(1)
        .then( msg => {
            conx.countTodos().then(all=>{
                let rtn = {
                    pendientes: msg,
                    total: all
                }
                res.status(200).json({msg:rtn});
            })
        })
        .catch( err => {
            res.status(203).json(err);
        });
}
const topFinishing =  (req, res = response) => {
    const conx = new Conexion();
    conx.countByStatus(2)
        .then( msg => {
            conx.countTodos().then(all=>{
                let rtn = {
                    finish: msg,
                    total: all
                }
                res.status(200).json({msg:rtn});
            })
        })
        .catch( err => {
            res.status(203).json(err);
        });
}

const theBest =  (req, res = response) => {
    const conx = new Conexion();
    conx.theBest()
        .then( msg => {
            res.status(200).json(msg);
        })
        .catch( err => {
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}

module.exports = {
    topPending,
    topFinishing,
    theBest
}