const bcrypt = require('bcrypt');
const controlador = require('../controllers/userController');
const { verifyToken } = require('../helpers/generate_jwt');
const conexion = require('../database/ConexionUser');
const jwt = require('jsonwebtoken')


const checkStatusUser = async (req, res, next) =>{
    try {
        const conx = new conexion();
       await conx.getUserByEmail(req.body.email).then(msg=>{
        let today = new Date();

        if (msg.dataValues.startAt != null || msg.dataValues.endAt != null) {
            if (new Date(msg.dataValues.startAt) <= today) {
                if (new Date(msg.dataValues.endAt) >= today || msg.dataValues.endAt == null) {
                    next();
                } else {
                    return res.status(401).json({ 'msg': 'User on leave since: ' + msg.dataValues.endAt });
                }
            } else {
                return res.status(401).json({ 'msg': 'User can login: ' + msg.dataValues.startAt });
            }
        } else {
            next();
        }
       })
        .catch(err=>{
            return res.status(401).json({ 'msg': 'Error with credentials'});

        });

        
    } catch (error) {
        console.error('Error in checkStatusUser:', error);
        return res.status(500).json({ 'msg': 'Internal server error' });
    }
}


const checkToken = (req, res, next) =>{
    const token = req.header('x-token');  //Este nombre será establecido en el cliente también.

    if (!token){
        return res.status(401).json({'msg':'No hay token en la petición.'});
    }

    try {
        
        const {uid , roles} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.userId = uid;
        req.uroles = roles;
        console.log(uid);
        console.log(token);
        next();
        
    }catch(error){
        console.log(error);
        res.status(401).json({'msg':'Token not valid'});
    }
}


const tokenCanAdmin = (req, res, next) => {

    let roles = req.uroles
    let i = 0
    let check = true
    while(i<roles.length && check){
        if(roles[i] === 1) {
            check = false
        }
        i++
    }

    if(!check){
        next();
    }else{
        res.status(400).json({msg:'Token without permisions'})
    }

}
const tokenCanProg = (req, res, next) => {

    let roles = req.uroles
    let i = 0
    let check = true
    while(i<roles.length && check){
        if(roles[i] === 2) {
            check = false
        }
        i++
    }

    if(!check){
        next();
    }else{
        res.status(400).json({msg:'Token without permisions'})
    }

}

const tokenCanAdminOrProg = (req, res, next) => {

    let roles = req.uroles
    let i = 0
    let check = true
    while(i<roles.length && check){
        if(roles[i] === 1 || roles[i] === 2) {
            check = false
        }
        i++
    }

    if(!check){
        next();
    }else{
        res.status(400).json({msg:'Token without permisions'})
    }
}

module.exports = {
    checkToken,
    tokenCanAdmin,
    tokenCanProg,
    checkStatusUser,
    tokenCanAdminOrProg
}