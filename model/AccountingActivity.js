
module.exports = (sequelize, DataTypes) => {

    const AccountingActivity = sequelize.define('AccountingActivities', {
        AccountingActivityID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        AccountingActivityDetail: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        Debt: {
            type: DataTypes.DECIMAL,
            allowNull: false,

        },
        Total:{

            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        DateSave: {
            type: DataTypes.DATE,
            allowNull: false,
        }
        ,Status
        :{
            type:DataTypes.STRING,
            allowNull: false,
        
        }
        
      
    })

    return AccountingActivity;
}