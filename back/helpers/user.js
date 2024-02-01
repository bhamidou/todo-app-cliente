const bcrypt = require('bcrypt');
const { generarJWT } = require('./generate_jwt');
const controlador = require('../controllers/userController');

const generateRandPass = () => {
    return Math.random().toString(36).slice(-8);
}

module.exports = {

    generateRandPass
}