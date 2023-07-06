const db = require('../models');

// criar o modelo principal

const Diacono = db.diaconos;

// Main Work

// Post de Diacono

const addDiacono = async (req, res) => {


    let info = {
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,

    }

    const diacono = await Diacono.create(info)
    res.status(201).json({
        success:  true,
        message: 'Diacono criado!',
        data: diacono
    })
    console.log(diacono)



}
// Get diaconos
const getDiaconos = async (req, res) => {
    let diaconos = await Diacono.findAll({
        attributes: [
            'id',
            'nome',
            'data_nascimento'
        ]
    })
    res.status(200).json({
        success:  true,
        message: 'Diaconos recuperados!',
        data: diaconos
    })
}
// GET diacono específico

const getDiacono = async (req, res) => {
    let id = req.params.id
    let diacono = await Diacono.findOne({
        where: {id: id}
    })
    res.status(200).json({
        success:  true,
        message: 'Diacono recuperado!',
        data: diacono
    })
}
// PATCH diacono
const patchDiacono = async (req, res) => {
    let id = req.params.id
    
    const diacono = await Diacono.update(req.body, {where: {id:id}})

    const retorno = await Diacono.findOne({
        where: {id: id}
    })
    res.status(200).json({
        success:  true,
        message: 'Diacono atualizado!',
        data: retorno
    })
}
// DELETE diacono

const deleteDiacono = async (req, res) => {
    let id = req.params.id
    await Diacono.destroy({
        where: {id: id}
    })
    res.status(200).json({
        success:  true,
        message: 'Diacono deletado!',
    })
}

module.exports = {
    addDiacono,
    getDiaconos,
    getDiacono,
    patchDiacono,
    deleteDiacono,
}
