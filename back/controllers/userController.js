const {response, request} = require("express");
const Conexion = require("../database/ConexionUser");
const {generarJWT} = require("../helpers/generate_jwt");
const bcrypt = require('bcrypt');
const {generateRandPass} = require("../helpers/user");

const defaultRolUser = 2 // rol : programador

const usuariosGet = (req, res = response) => {
    const conx = new Conexion();

    conx
        .getlistado()
        .then((msg) => {
            res.status(200).json(msg);
        })
        .catch((err) => {
            res.status(203).json({msg: "No se han encontrado registros"});
        });
};

const usuariosGetById = (req, res = response) => {
    const conx = new Conexion();

    conx
        .getUsuario(req.params.id)
        .then((msg) => {
            res.status(200).json(msg);
        })
        .catch((err) => {
            res.status(203).json({msg: "No se han encontrado registros"});
        });
};

const usuariosGetByEmail = (req, res = response) => {
    const conx = new builConexion();
    let email = req.body.email;
    console.log(email);
    conx
        .getUserByEmail(email)
        .then((msg) => {
            res.status(200).json(msg);
        })
        .catch((err) => {
            res.status(203).json({msg: "No se han encontrado registros"});
        });
};

const login = (req, res) => {
    let email = req.body.email;
    const conx = new Conexion();
    let storedHash = "";
    conx
        .getUserByEmail(email)
        .then((msg) => {
            bcrypt.compare(req.body.password, storedHash, (err, result) => {
                if (result) {
                    res.status(401).json({msg: 'Error with credentials, try again'})
                }
                conx.showRolUser(msg.id).then(roles => {
                    let arrRoles = []
                    roles.forEach(element => {
                        if (element.rol_id != null) {
                            arrRoles.push(element.rol_id)
                        }
                    })
                    let rtnUser ={
                        msg,
                        roles: arrRoles
                    }
                    let token = generarJWT(msg.id, arrRoles)
                    res.status(200).json({rtnUser, token})
                })

            })

        })
        .catch((err) => {
            res.status(401).json({msg: 'Error with credentials, try again'})

        });
};

const signup = async (req, res) => {
    const conx = new Conexion()
    let pass = req.body.password
    req.body.password = await bcrypt.hash(pass, 10)
    conx.registrarUsuario(req.body)
        .then((msg) => {
            console.log(msg)
            let rtnObj = {
                id: msg.dataValues.id,
                name: msg.dataValues.name,
                email: msg.dataValues.email,
                rol: defaultRolUser
            }
            conx.addRolUser(rtnObj.id, defaultRolUser).then(msg =>{
                res.status(200).json(rtnObj)
            }).catch(error =>{
                res.status(200).json({msg:'Error when setting rol'})

            })
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const updateUser = async (req, res) => {
    const conx = new Conexion()
    let pass = req.body.password

    if (pass != null) {
        req.body.password = await bcrypt.hash(pass, 10)
    }
    conx.modificarUsuario(req.params.id, req.body)
        .then((msg) => {
            res.status(200).json(msg)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}
const deleteUser = async (req, res) => {
    const conx = new Conexion()

    conx.borrarUsuario(req.params.id)
        .then((msg) => {
            res.status(200).json(msg)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const addRolUser = async (req, res) => {
    const conx = new Conexion()

    conx.addRolUser(parseInt(req.params.userId), req.body.rolId)
        .then((msg) => {
            res.status(200).json(msg)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}


const showRolUser = async (req, res) => {
    const conx = new Conexion()

    conx.showRolUser(req.params.userId)
        .then((msg) => {
            res.status(200).json(msg)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}
const resetpass = async (req, res) => {
    const conx = new Conexion()
    let email = req.body.email
    let pass = generateRandPass()
    let password = {password: await bcrypt.hash(pass, 10)}
    conx.getUserByEmail(email).then(idUser => {
        conx.modificarUsuario(idUser.dataValues.id, password)
            .then((msg) => {
                console.log(pass)
                res.status(200).json({msg: 'Password updated', pass})
            })
            .catch(error => {
                res.status(400).json(error)
            })
    })
}



module.exports = {
    usuariosGet,
    usuariosGetById,
    usuariosGetByEmail,
    login,
    signup,
    updateUser,
    deleteUser,
    addRolUser,
    showRolUser,
    resetpass
};
