const express = require('express');

//MIDDLEWARES
const { validToken } = require('../middlewares/token.middleware');

//CONTROLLERS
const { findAllTikets } = require('../controllers/managerTickets.controllers');

const router = express.Router();

router.get('/', validToken, findAllTikets);

module.exports = router;
