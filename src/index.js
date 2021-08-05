const express = require('express');
const mysql = require('mysql');
const myConn = require('express-myconnection');
//Start server
const app = express();

//Load routes
const centerRoutes = require('./routes/center');
const employeeRoutes = require('./routes/employee');
const specialtyRoutes = require('./routes/specialty');
const medRoutes = require('./routes/med');

//Settings
app.set('port',process.env.PORT||3000);

//Connection
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(myConn(mysql, {
    host: '52.170.133.28',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'centro_medico'
},'single'));

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes
app.use('/api',centerRoutes);
app.use('/api',employeeRoutes);
app.use('/api',specialtyRoutes);
app.use('/api',medRoutes);

//Start on port 3000
app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000');
});