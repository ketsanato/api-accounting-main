
module.exports = (sequelize, DataTypes) => {

    const Accounting = sequelize.define('Accountings', {
        AccountingID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        AccountingName: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        AccountingCode: {
            type: DataTypes.STRING,
            allowNull: false,

        },Status
        :{
            type:DataTypes.STRING,
            allowNull: false,
        
        }
        
      
    })

    return Accounting;
}