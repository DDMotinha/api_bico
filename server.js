const express = require('express')
const app = express();
const cors = require('cors')
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  database: 'bregister',
  port: '3308',
  password: null
});

app.use(cors())

const PORTA = process.env.SERVER_PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})


app.get('/api/vagas', function(req, res){

    const queryVaga = connection.query(
        'SELECT * FROM vagas',
        function(err, results) {
          res.json(results)
        }
      );
})

app.listen(PORTA, function(){
    console.log(`Servidor rodando na porta ${PORTA}`)
})