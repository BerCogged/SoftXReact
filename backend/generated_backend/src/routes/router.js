const router = require('express').Router();
const express = require('express');
const {getHistory,postHistory} = require('../controllers/historyController');
router.get('/',getHistory);
router.post('/',postHistory);

module.exports = router;