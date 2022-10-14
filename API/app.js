const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
//const mariadb = require('mariadb/callback');

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// MySQL
const con = mysql.createConnection({
    connectionLimit : 10,
    host            : 'localhost',
    port            : 3306,
    user            : 'root',
    password        : '',
    database        : 'chatbot'
})

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    port            : 3306,
    user            : 'root',
    password        : '',
    database        : 'chatbot'
})



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
  });




app.post('/getPersona', async (req,res) =>{

    var ci = req.body.ci
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`)
  
        connection.query('SELECT * FROM persona where personaci = '+ci, (err, rows) => {
          connection.release() // return the connection to pool
  
          if (!err) {
           res.json({
                datos : rows
           })
          } else {
            datos : ''
            console.log(err)
          }
        })
    })
})

app.post('/getCategoria', async (req,res) =>{

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`)
  
        connection.query('SELECT * FROM categoria_productos', (err, rows) => {
          connection.release() // return the connection to pool
  
          if (!err) {
           res.json({
                datos : rows
           })
          } else {
            console.log(err)
          }
        })
      })


})

// Get a beer by ID
app.post('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from persona WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a records / beer
app.post('/deleteCliente', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        //var keys = Object.keys(req.body)
        const tabla = req.body.tabla
        const id = req.body.id_cliente


        connection.query('DELETE from '+tabla+' WHERE id_cliente = ?', id, (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.json({
                    error:'SIN_ERROR',
                    description:`Se elimino correctamente el dato en la tabla ${tabla}.`
                })
            } else {
                console.log(err)
                res.json({
                    error:'ERROR',
                    description: err
                })
            }

        })
    })
})


// Add a record / beer
app.post('/insert', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body.datos
        const tabla = req.body.tabla

        connection.query('INSERT INTO '+tabla+' SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.json({
                    error:'SIN_ERROR',
                    description:`Se inserto correctamente los datos en la tabla ${tabla}.`
                })
            } else {
                console.log(err)
                res.json({
                    error:'ERROR',
                    description: err
                })
            }

        })

        console.log(req.body)
    })
})


// Update a record / beer
app.post('/update', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { id, name, tagline, description, image } = req.body

        connection.query('UPDATE beers SET name = ?, tagline = ?, description = ?, image = ? WHERE id = ?', [name, tagline, description, image, id] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the name: ${name} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})



// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))