module.exports = (sequelize, DataTypes) => {

    const ActivityDetail = sequelize.define('ActivityDetails', {
        ActivityDetailID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        Detail: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        Amount: {
            type: DataTypes.FLOAT,
            allowNull: false,

        },
        Date: {

            type: DataTypes.DATE,
            allowNull: false,

        },
        Status: {
            type: DataTypes.STRING,
            allowNull: false,

        }


    })

    return ActivityDetail;
}