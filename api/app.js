//Disculpen la falta de organizacion de los archivos, leí tarde el mail donde se me pasaba la prueba tecnica y decidí ahorrar tiempo,
//normalmente separo la config de la database, los comandos sql y las rutas 



//Dotenv for config the environment
const dotenv = require('dotenv');
dotenv.config({path: './.env'})

//Import express and MySql
const express = require('express');

//Bodyparser to transform the body
const bodyParser = require('body-parser');

//Bcryptjs
const bcryptjs = require('bcryptjs');

//Import connection
const connection = require('./src/db')


//Server config
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT || 3050}`)  
})

//Session variable
const session = require('express-session');
app.use(session({
    secret: 'secretRandomKey',
    resave: true,
    saveUninitialized: true
}))

//Routes
app.get('/', (req, res)=>{
    res.send('Welcome to my api')
});



//Login
app.post('/login', async (req, res)=>{
    const sql = 'SELECT * FROM users WHERE username = ?'
    const {username, password} = req.body;
    let hashed = await bcryptjs.hash(password, 8);

    if(username && password){
        connection.query(sql, [username], async (error, results)=>{
            if(results.length == 0 || !(await bcryptjs.compare(password, results[0].password))){
                res.json({succes: false})
            }else{
                // req.session.loggedin = true;
                // req.session.username = results[0].username
                res.json({succes: true})
            }
        })
    }else{
        res.send('Need a password and username')
    }
})

//Register
app.post('/register', async (req, res)=>{
    
    const {username, password} = req.body;
    let passHash = await bcryptjs.hash(password, 8);
    const sql = 'INSERT INTO users SET ?'
    connection.query(sql,{username: username, password:passHash}, async (error, results)=>{
        if (error) throw error;
        if(results){
            res.json({succes: true})
        }else{
            res.json({succes: false})
        }
    })
})


//Get all clients
app.get('/clients', (req, res)=>{
    const sql = 'SELECT * FROM clients';

    connection.query(sql, (error, results)=>{
        if(error) throw error;
        if(results.length > 0){
            res.json(results)
        }else {
            res.send('No hay resultados en la base de datos')
        }
    })
})

//Get client by id
app.get('/clients/:id', (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT * FROM clients WHERE clientId = ${id}`;

    connection.query(sql, (error, result)=>{
        if(error) throw error;
        if(result.length > 0){
            res.json(result)
        }else {
            res.send('No hay resultados en la base de datos')
        }
    })
})

//Create new client
app.post('/clients/add', (req, res)=>{
    const sql = 'INSERT INTO clients SET ?'

    const newClient = {
        name: req.body.name
    };

    connection.query(sql, newClient, error =>{
        if(error) throw error;
        res.send('Cliente creado')
    })
})

//Update client
app.put('/clients/:id', (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const sql = `UPDATE clients SET name = '${name}' WHERE clientId = ${id}`

    connection.query(sql, error =>{
        if(error) throw error;
        res.send('Cliente editado')
    })
})

//Delete client
app.delete('/clients/:id', (req, res)=>{
    const {id} = req.params;
    const sql = `DELETE FROM clients WHERE clientId = ${id}`;

    connection.query(sql, error =>{
        if(error) throw error;
        res.send('Cliente eliminado')
    })
})