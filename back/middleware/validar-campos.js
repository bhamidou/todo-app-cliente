const { validationResult } = require('express-validator');
const Conexion = require('../database/ConexionUser');


const validateCampos = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }

    next();
}

module.exports = {
    validateCampos
}
