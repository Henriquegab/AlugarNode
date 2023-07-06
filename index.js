const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('./models/userModel.js');


const secretKey = process.env.SECRET_KEY;

const app = express();

var corsOptions = {
    origin: 'http://localhost:8080'
}

// JWT

// Rota de autenticação
app.post('/login', (req, res) => {


    let info = {
        email: req.body.email,
        password: req.body.password,

    }


  
    // Verifique as credenciais do usuário no banco de dados usando Sequelize
    User.findOne({ where: { email: info.email, senha: info.password } })
      .then(user => {
        if (user && user.email) {
          // Crie um token JWT válido por 1 hora
          const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
          res.json({ 
            success: true,
            message: 'Usuário logado!',
            token: token 
          });
        } else {
          res.status(401).json({
            success: false,
            message: 'Credenciais inválidas'
          });
        }
      })
      .catch(error => {
        console.error('Erro ao verificar as credenciais do usuário:', error);
        res.status(500).json({ error: 'Erro ao verificar as credenciais do usuário' });
      });
  });
  

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