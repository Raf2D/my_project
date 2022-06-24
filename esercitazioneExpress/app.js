const express = require('express');
const app = express();
const port = 3000;

let path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

let contatore = 0;

//oggetto utente
let utente = {
    nome : "",
    password:""
}


//creazione array di oggetti utenti
let utenti = new Array();


//chiamate get
app.get('/', (req, res) =>{
        contatore++;
        res.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/register.html', (req, res) =>{
    contatore++;
    res.sendFile(path.join(__dirname + '/register.html'));
});

app.get('/login.html', (req, res) =>{
    contatore++;
    res.sendFile(path.join(__dirname + '/login.html'));
});


//chiamate post
app.post('/register.html', function(req,res){
    console.log("Ricevuto una richiesta POST");
    utente.nome = req.body.nome;
    utente.password = req.body.password;
    console.log(utente);
    utenti.push(utente);
    res.sendFile(path.join(__dirname + '/login.html'));


});


app.post('/login.html',(req,res) =>{
    contatore++;
    let flag = false;
        for(i = 0; i< utenti.length; i++){
            if(utenti[i].nome == req.body.nome || utenti[i].password == req.body.password){
                flag = true;
            }
        }

        if(flag){
            res.sendFile(path.join(__dirname + '/sessionePrivata.html'));
        }else{
            res.sendFile(path.join(__dirname + '/credenzialiErrate.html'));
        }
        
})




app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
    
});

