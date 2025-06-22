
module.exports = (sequelize, DataTypes) => {

    const ActivityType = sequelize.define('ActivityTypes', {
        ActivityTypeID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        ActivityTypeName: {
            type: DataTypes.STRING,
            allowNull:  false,

        },
        ActivityTypeCode: {
            type: DataTypes.STRING,
            allowNull: false,

        }
        ,Status
        :{
            type:DataTypes.STRING,
            allowNull: false,
        
        }
        
      
    })

    return ActivityType;
}