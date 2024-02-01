const {Router } = require('express');
const controlador = require('../controllers/userController');
const { checkToken, login, esMayor, checkStatusUser, tokenCanAdmin} = require('../middleware/user');
const { validateCampos } = require('../middleware/validar-campos');
const { check } = require('express-validator');
const {uniqueEmail, checkStartAt} = require("../helpers/db-validator");
const router = Router();

router.get('/user/', [checkToken, tokenCanAdmin], controlador.usuariosGet);
router.get('/user/:id', [checkToken, tokenCanAdmin],controlador.usuariosGetById);
router.post('/login', [
    check('email', 'The description can not be empty').isEmail().notEmpty(),
    check('password', 'The time can not be empty').notEmpty().isAlphanumeric(),
    validateCampos,
    checkStatusUser
],controlador.login);

router.post('/reset-password',[
    check('email','The email can not be empty').isEmail(),
    validateCampos
],controlador.resetpass)

//con esta misma ruta se registra el usuario y el admin da de alta a los usuarios
router.post('/user/', [
    check('name','The name can not be empty').not().isEmpty(),
    check('email', 'The email can not be empty').isEmail().notEmpty().custom(uniqueEmail),
    check('password', 'The password can not be empty').notEmpty().isAlphanumeric(),
    check('startAt', 'The start at date must be equal to or greater than today').custom(checkStartAt),
    check('endAt', 'The end at date must be equal to or greater than today').custom(checkStartAt),
    validateCampos
], controlador.signup);

router.put('/:id?', [checkToken, tokenCanAdmin],controlador.updateUser);
router.delete('/:id', [checkToken, tokenCanAdmin], controlador.deleteUser);

//el rol va en el body
router.post('/asgin-rol/:userId', [checkToken, tokenCanAdmin],controlador.addRolUser)
router.get('/rol/:userId', [checkToken, tokenCanAdmin],controlador.showRolUser)

module.exports = router;