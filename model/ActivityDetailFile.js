
module.exports = (sequelize, DataTypes) => {

    const ActivityDetailFile    = sequelize.define('ActivityDetailFiles', {
        ActivityDetailFileID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        Detail: {
            type: DataTypes.STRING,
            allowNull:  false,

        }, FileName
        :{
            type:DataTypes.STRING,
            allowNull: false,
        
        },
        Path: {

            type: DataTypes.STRING,
            allowNull: false,
        
        }
    
        
      
    })

    return ActivityDetailFile;
}