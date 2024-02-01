const { validationResult } = require('express-validator');
const Conexion = require('../database/ConexionUser');

const uniqueEmail = (email) => {
    return new Promise((resolve, reject) => {
        const conx = new Conexion();
        conx.getUserByEmail(email)
            .then(msg => {
                console.log('Existe');
                reject(new Error('This email is used by other user'));

            })
            .catch(err => {
                console.log('No existe');
                resolve(true);
            });
    });
};

const checkStartAt = (startAt) =>{
    return new Promise((resolve, reject) =>{
        if(startAt != null){
            const startAtDate = new Date(startAt);
            const today = new Date();

            if (startAtDate <= today) {
                resolve(true)
            }else{
                reject(new Error('The start at date must be equal to or greater than today'));
            }
        }else{
            resolve(true)
        }
    })
}

module.exports = {
    uniqueEmail,
    checkStartAt
}