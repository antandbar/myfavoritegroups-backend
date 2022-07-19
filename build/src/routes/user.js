'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/', userController_1.userController.getUser);
router.get('/:id', userController_1.userController.getUserDetail);
router.post('/', userController_1.userController.postUser);
exports.default = router;
