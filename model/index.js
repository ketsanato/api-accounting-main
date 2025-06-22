const dbConfig = require('../config/db');
const {
    Sequelize,
    DataTypes,QueryTypes
} = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            idle: dbConfig.pool.idle,
            acquire: dbConfig.pool.acquire,

        }
    }


)

sequelize.authenticate().then(() => {
    console.log("connect");

}).catch((err) => {
    console.log("Eror:" + err);

})


const AccountingType = require('./AccountingType')(sequelize, DataTypes);
const AccountingGroup = require('./AccountingGroup')(sequelize, DataTypes);
const AccountingGroupDetail = require('./AccountingGroupDetail')(sequelize, DataTypes);
const Accounting = require('./Accounting')(sequelize, DataTypes);
const AccountingActivity = require('./AccountingActivity')(sequelize, DataTypes);
const Currency = require('./Currency')(sequelize, DataTypes);
const TransitionTypes = require('./TransitionType')(sequelize, DataTypes);

const ActivityType = require('./ActivityType')(sequelize, DataTypes);

const ActivityDetail = require('./ActivityDetail')
    (sequelize, DataTypes);
const ActivityDetailFile = require('./ActivityDetailFile')(sequelize, DataTypes);


sequelize.sync({
    force: false
}).then(() => {
    console.log('yes re-sync done!');

})


AccountingType.hasMany(AccountingGroup, {
    foreignKey: 'AccountingTypeID',
    sourceKey: 'AccountingTypeID'
});
AccountingGroup.belongsTo(AccountingType, {
    foreignKey: 'AccountingTypeID',
    targetKey: 'AccountingTypeID'
});
//FK AccountingType//

AccountingGroup.hasMany(AccountingGroupDetail, {
    foreignKey: 'AccountingGroupID',
    sourceKey: 'AccountingGroupID'
});
AccountingGroupDetail.belongsTo(AccountingGroup, {
    foreignKey: 'AccountingGroupID',
    targetKey: 'AccountingGroupID'
});
//FK AccountingGroup//

AccountingGroupDetail.hasMany(Accounting, {
    foreignKey: 'AccountingGroupDetailID',
    sourceKey: 'AccountingGroupDetailID'
});
Accounting.belongsTo(AccountingGroupDetail, {
    foreignKey: 'AccountingGroupDetailID',
    targetKey: 'AccountingGroupDetailID'
});
//FK AccountingGroupDetail//

Accounting.hasMany(ActivityDetail, {
    foreignKey: 'AccountingID',
    sourceKey: 'AccountingID'
});
ActivityDetail.belongsTo(Accounting, {
    foreignKey: 'AccountingID',
    targetKey: 'AccountingID'
});
//FK Accounting//


Currency.hasMany(ActivityDetail, {
    foreignKey: 'CurrencyID',
    sourceKey: 'CurrencyID'
});
ActivityDetail.belongsTo(Currency, {
    foreignKey: 'CurrencyID',
    targetKey: 'CurrencyID'
});
//FK Currency//
ActivityType.hasMany(ActivityDetail, {
    foreignKey: 'ActivityTypeID',
    sourceKey: 'ActivityTypeID'
});
ActivityDetail.belongsTo(ActivityType, {
    foreignKey: 'ActivityTypeID',
    targetKey: 'ActivityTypeID'
});
//FK ActivityType//
TransitionTypes.hasMany(ActivityDetail, {
    foreignKey: 'TransitionTypeID',
    sourceKey: 'TransitionTypeID'
});
ActivityDetail.belongsTo(TransitionTypes, {
    foreignKey: 'TransitionTypeID',
    targetKey: 'TransitionTypeID'
});

ActivityDetail.hasMany(ActivityDetailFile, {
    foreignKey: 'ActivityDetailID',
    targetKey: 'ActivityDetailID'
});
ActivityDetailFile.belongsTo(ActivityDetail, {
    foreignKey: 'ActivityDetailID',
    targetKey: 'ActivityDetailID'
});

//FK TransitionType//


module.exports = {
    AccountingType,
    AccountingGroup,
    AccountingGroupDetail,
    Accounting,
    TransitionTypes,
    ActivityDetail, 
    ActivityType,   
    Currency,
    ActivityDetailFile

};