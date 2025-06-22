const Contorller = require('../controllers/tb_deposit_transaction');
const router = require('express').Router();
const url = "/tb_deposit_transaction2";

router.get(url + '/get', Contorller.get);

module.exports = router;