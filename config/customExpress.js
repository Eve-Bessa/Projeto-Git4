const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const { Pool } = require('pg')
module.exports = () =>{
    const app = express()

    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)
    
    
    const pool = new Pool({
        user: 'postgres',
        host: '127.0.0.1',
        database: 'git4',
        password: 'fmp1124',
        port: 8000,
    })
        pool.query('SELECT NOW()', (err, res) => {
          console.log(err, res) 
          pool.end() 
    })

    return app
}

