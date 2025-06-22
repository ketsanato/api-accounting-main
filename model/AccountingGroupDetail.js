
module.exports = (sequelize, DataTypes) => {
    const AccountingGroupDetail = sequelize.define('AccountingGroupDetails', {
        AccountingGroupDetailID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        AccountingGroupDetailName: {
            type: DataTypes.STRING,
            allowNull: false

        },
        AccountingGroupDetailCode: {
            type: DataTypes.STRING,
            allowNull: false

        },
        Status: {
            type: DataTypes.STRING,
            allowNull: false

        }


    })

    return AccountingGroupDetail;
}