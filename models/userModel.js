module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return User
}