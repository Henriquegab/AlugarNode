const diaconoController = require('../controllers/diaconoController.js');

const router = require('express').Router()

router.post('/diacono', diaconoController.addDiacono);
router.get('/diacono', diaconoController.getDiaconos);
router.get('/diacono/:id', diaconoController.getDiacono);
router.patch('/diacono/:id', diaconoController.patchDiacono);
router.delete('/diacono/:id', diaconoController.deleteDiacono);

module.exports = router