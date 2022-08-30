const {DataTypes} = require('sequelize')

module.exports = (Sequelize) => {
    Sequelize.define(
        'temperament',
        {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
    timestamps: false,
    }
    );
}