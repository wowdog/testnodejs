var mysql = require('mysql');

var mysqlConfig = {
    connectionLimit : 1000,
    host : '127.0.0.1',
    user : 'mini',
    password : '1234',
    database: 'mini',
    port: 3306,
    dateStrings: 'date'
};  //로딩연동

var pool = mysql.createPool(mysqlConfig);   //객체생성
var conn = mysql.createConnection(mysqlConfig);

exports.pool = pool;
exports.conn = conn;
