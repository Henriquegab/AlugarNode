module.exports = (sequelize, DataTypes) => {
    const Diacono = sequelize.define("diacono", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_nascimento: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
    })

    return Diacono
}