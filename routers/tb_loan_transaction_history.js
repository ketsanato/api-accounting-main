const Contorller = require('../controllers/tb_loan_transaction');
const router = require('express').Router();
const url = "/tb_loan_transaction_history";

router.get(url + '/get', Contorller.get);

module.exports = router;