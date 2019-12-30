const express = require('express');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mayathelion1',
  database: 'world'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySql Connected... ')
})

const app = express();

//create DB

app.get('/x', (req, res) => {
  let sql = 'select name from world.country where lower(name) like "%phil%"';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})

app.get('/y', (req, res) => {
  let sql = 'select other_lang from world.languages where lang_id = 63';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})

app.get('/z', (req, res) => {
  let sql = 'select name from world.country where language = "dutch"';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})

app.get('/continent', (req, res) => {
  let sql = 'select continent from world.country where language = "dutch"';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})

app.get('/europe', (req, res) => {
  let sql = 'select name, language from world.country where continent = "Europe"';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})

app.get('/language', (req, res) => {
  let sql = 'SELECT name , language FROM world.country where language = "dutch"';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})

app.get('/4', (req, res) => {
  let sql = 'SELECT IF(language > 1 AND name > 1, "True", "False") from world.country';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})

app.listen('3000', () => {
  console.log('Server started on port 3000')
})