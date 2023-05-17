//Disculpen la falta de organizacion de los archivos, leí tarde el mail donde se me pasaba la prueba tecnica y decidí ahorrar tiempo,
//normalmente separo la config de la database, los comandos sql y las rutas 

const cors = require('cors');

//Dotenv for config the environment
const dotenv = require('dotenv');
dotenv.config({path: './.env'})

//Import express and MySql
const express = require('express');

//Bodyparser to transform the body
const bodyParser = require('body-parser');

//Bcryptjs (hash the password)
const bcryptjs = require('bcryptjs');

//Import connection
const connection = require('./src/db')


//Server config
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())


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
                res.json({success: false, })
            }else{
                // req.session.loggedin = true;
                // req.session.username = results[0].username
                res.json({success: true, userLogged: username})
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
            res.json({success: true})
        }else{
            res.json({success: false})
        }
    })
})

//Logout
app.get('/logout', (req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
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
    const sqlBuyout= `SELECT * FROM buyout WHERE cliente = ${id}`;
    let client = {
        clientName: "",
        buydrop: [],
        clientId: 0,
        totalPesos: 0,
        totalUsd: 0
    }

    connection.query(sql, (error, result)=>{
        if(error) throw error;
        if(result.length > 0){
            client.clientName = result[0].name
            client.clientId = result[0].clientId
        }else {
            res.send('No hay resultados en la base de datos')
        }
    })

    connection.query(sqlBuyout, (error, results)=>{
        if(error) throw error;
        if(results){
            let totalPesos = 0
            let totalUsd = 0
            results.map((b)=>{totalPesos = totalPesos + b.price})
            results.map((b)=>{totalUsd = totalUsd + (b.price / b.usdValue)})
            client.buydrop = results 
            client.totalPesos = totalPesos
            client.totalUsd = totalUsd
            res.json(client)
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
        res.json({success: true})
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


//Create new buyout
app.post('/buyout/add', (req, res)=>{
    const sql = 'INSERT INTO buyout SET ?'

    const newBuyout = {
        item: req.body.item,
        talle: req.body.talle,
        cliente: req.body.clientId,
        price: req.body.price,
        usdValue: req.body.usdValue
    };

    connection.query(sql, newBuyout, error =>{
        if(error) throw error;
        res.json({success: true})
    })
})



//Get All buyouts 
app.get('/buyouts/list', (req, res)=>{
    const sql = 'SELECT * FROM buyout';

    connection.query(sql, (error, results)=>{
        if(error) throw error;
        if(results.length > 0){
            let payload = {succes:true,results: results}
            res.json(payload)
        }else {
            res.json({succes:false, error:"No se encontraron compras"})
        }
    })
})

