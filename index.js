const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8001'
}



// middlewares

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true}))

// Rotas

const router = require('./routes/diaconoRouter.js');

app.use('/api', router)

// teste

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Deu certo o GET! 😃'
    })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})