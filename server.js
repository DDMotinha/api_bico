const express = require('express')
const app = express();
const cors = require('cors')
const mysql = require('mysql2');

app.use(cors())


const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    database: 'bregister',
    port: '3308',
    password: null
});


app.get('/api/vagas', function(req, res){

    const queryVaga = connection.query(
        'SELECT * FROM vagas',
        function(err, results) {
          res.json(results)
        }
      );
})

app.listen(3030, function(){
    console.log("Servidor rodando na porta 3030")
})