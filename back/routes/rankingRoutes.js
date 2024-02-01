const {Router } = require('express');
const { check } = require('express-validator');

const controlador = require('../controllers/rankingController');
const { validateCampos } = require('../middleware/validar-campos');
const {checkToken, tokenCanAdmin, tokenCanAdminOrProg} = require("../middleware/user");

const router = Router();


router.get('/pending',[checkToken, tokenCanAdminOrProg],controlador.topPending)
router.get('/finish', [checkToken, tokenCanAdminOrProg],controlador.topFinishing)
router.get('/best-programmer', [checkToken, tokenCanAdminOrProg],controlador.theBest)



module.exports = router;