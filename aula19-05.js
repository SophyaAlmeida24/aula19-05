const express = require("express")
const app = express();

const porta = 3000;

app.get('/texto' , (req, res) => {
    res.send("Olá Mundo!")
})

app.get('/html', (req, res) => {
    res.send("<h1 style='color:red'>Sophya</h1>")
})

app.get('/json', (req, res) => {
    res.json(
        {
            mensagem: "Exemplo de json!"
        }
    )
}) 

app.get('/idade/:anos', (req, res) => {
    const idade = req.params.anos;

    if(idade >= 18) {
        res.send("Acesso Liberado!")
    } else {
        res.send("Proibido para menores!")
    }
})

// '/categoria/:idade' -> =categoria infantil
// 12 >= EEEEE <=17 categoria juvenil
// 18 >=categoria adulto!

app.get('/categoria/:idade', (req, res) => {
    const idade = req.params.idade;

    if(idade < 12) {
        res.send("categoria infantil")
    } else if(idade >= 12 && idade <= 17) {
        res.send("categoria juvenil")
    } else {
        res.send("categoria adulto")
    }
})

app.arguments(express.json() )

app.post('/login', (req, res) =>{
    const body = req.body;

    if(body.senha === "123"){
        res.send("LOGIN EFETUADO COM SUCESSO!")
    } else {
        res.send("senha incorreta!")
    }
})

app.listen(porta, () => {
    console.log("servidor rodando na porta: " + porta)
})