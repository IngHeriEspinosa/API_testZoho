const express = require("express");

const {findAllTikets} = require('../controllers/managerTickets.controllers');

const router = express.Router();

router.get("/",findAllTikets)


module.exports = router