const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

const corsOptions = {}
const model = require('./model/index')
const PORT = 9000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


const AccountingType = require('./routers/AccountingType');
const AccountingGroup = require('./routers/AccountingGroup');
const AccountingGroupDetail = require('./routers/AccountingGroupDetail');
const Accounting = require('./routers/Accounting');
const Currency = require('./routers/Currency');
const AccountingActivity = require('./routers/AccountingActivity');
const ActivityType = require('./routers/ActivityType');
const ActivityDetail = require('./routers/ActivityDetail');
const TransitionTypes = require('./routers/TransitionType');
const ActivityDetailFile = require('./routers/ActivityDetailFile');


const tb_deposit_transaction = require('./routers/tb_deposit_transaction');
const tb_loan_transaction = require('./routers/tb_loan_transaction');
const tb_customer = require('./routers/tb_customer');
const tb_loan_transaction_history = require('./routers/tb_loan_transaction_history');

app.use("/api", AccountingType);
app.use("/api", AccountingGroup);
app.use("/api", AccountingGroupDetail);
app.use("/api", Accounting);
app.use("/api", Currency);
app.use("/api", AccountingActivity);
app.use("/api", ActivityType);
app.use("/api", ActivityDetail);
app.use("/api", Currency);
app.use("/api", TransitionTypes);
app.use("/api", ActivityDetailFile);

app.use("/api", tb_deposit_transaction);
app.use("/api", tb_loan_transaction);
app.use("/api", tb_customer);
app.use("/api", tb_loan_transaction_history);
