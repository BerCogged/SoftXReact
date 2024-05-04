const router = require('express').Router();
const express = require('express');
const {getHistory,postHistory} = require('../controllers/historyController');

const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth);
router.get('/',getHistory);
router.post('/',postHistory);

module.exports = router;