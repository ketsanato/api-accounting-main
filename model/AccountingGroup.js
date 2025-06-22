
module.exports = (sequelize, DataTypes) => {

    const AccountingGroup = sequelize.define('AccountingGroups', {
        AccountingGroupID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        AccountingGroupName: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        AccountingGroupCode: {
            type: DataTypes.STRING,
            allowNull: false,

        },Status
        :{
            type:DataTypes.STRING,
            allowNull: false,
        
        }
    })
    return AccountingGroup;
}