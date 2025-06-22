module.exports = (sequelize, DataTypes) => {

    const TransitionTypes = sequelize.define('TransitionTypes', {

        TransitionTypeID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        TransitionTypeName: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        TransitionTypeCode: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        Status: {
            type: DataTypes.STRING,
            allowNull: false,

        }


    })

    return TransitionTypes;
}