
module.exports = (sequelize, DataTypes) => {

    const Currency = sequelize.define('Currencies', {
        CurrencyID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        CurrencyName: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        CurrencyCode: {
            type: DataTypes.STRING,
            allowNull: false,

        }
        ,Status
        :{
            type:DataTypes.STRING,
            allowNull: false,
        
        }
        
      
    })

    return Currency;
}