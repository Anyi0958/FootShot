const mysql = require('mysql')

const pool = mysql.createPool({
    port:'3306',
    user:'root',
    password:'',
    local:'127.0.0.1',
    database:'footshot'
})

module.exports = pool