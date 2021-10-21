/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const controllerWrapper = require('../../middlewares/controllerWrapper');
const validation = require('../../middlewares/validation')
const { joiSchema } = require('../../model/feedbacks');
const { feedbacks: ctrl } = require('../../controllers');

router.get('/', controllerWrapper(ctrl.getByEmail));

router.post('/', validation(joiSchema), controllerWrapper(ctrl.add));

router.delete('/:feedbackId', controllerWrapper(ctrl.removeById));

router.patch('/:feedbackId', validation(joiSchema), controllerWrapper(ctrl.updateById));

module.exports = router
