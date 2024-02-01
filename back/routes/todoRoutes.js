const {Router } = require('express');
const { check } = require('express-validator');

const controlador = require('../controllers/todoController');
const { validateCampos } = require('../middleware/validar-campos');
const {checkToken, tokenCanAdmin, tokenCanAdminOrProg} = require("../middleware/user");

const router = Router();


router.get('/pending', [checkToken, tokenCanAdminOrProg],controlador.getTaskPending)
router.post('/finish', [checkToken, tokenCanAdminOrProg],controlador.finishTodo)
router.get('/finish', [checkToken, tokenCanAdminOrProg],controlador.showFinish)
router.post('/asign-me', [checkToken, tokenCanAdminOrProg],controlador.asignTask)
router.get('/my-tasks', [checkToken, tokenCanAdminOrProg],controlador.myTasks)
router.get('/',[checkToken, tokenCanAdminOrProg],controlador.tasksGet);
router.get('/:id', [checkToken, tokenCanAdminOrProg],controlador.taskById);
router.post('/', [checkToken,
    check('title','The title can not be empty').not().isEmpty(),
    check('description', 'The description can not be empty').notEmpty(),
    check('time', 'The time can not be empty').notEmpty().isNumeric(),
    check('difficulty', 'The difficulty can not be empty').notEmpty().isIn(['XS', 'S', 'M', 'L', 'XL']),
    validateCampos
],controlador.createTask);

router.put('/:id', [checkToken, tokenCanAdminOrProg],controlador.updateTask);
router.put('/:id/progress', [checkToken, tokenCanAdminOrProg],controlador.addProgress);
router.delete('/:id', [checkToken, tokenCanAdmin],controlador.deleteTask);



module.exports = router;