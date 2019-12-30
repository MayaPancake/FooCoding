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

app.get('/world', (req, res) => {
  let sql = 'SELECT * from country';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})

//1. What are the names of countries with population greater than 8 million
app.get('/1', (req, res) => {
  let sql = 'select name, population from world.country where population > 8000000';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})
//2. What are the names of countries that have “land” in their names ?
app.get('/2', (req, res) => {
  let sql = 'select name from world.country where lower(name) like "%land%"';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})
//3. What are the names of the cities with population in between 500,000 and 1 million ?
app.get('/3', (req, res) => {
  let sql = 'select name from world.city where population between 500000 and 1000000';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})
//4. What's the name of all the countries on the continent ‘Europe’ ?
app.get('/4', (req, res) => {
  let sql = 'select name from world.country where lower(continent) = "europe"';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})
//5. List all the countries in the descending order of their surface areas.
app.get('/5', (req, res) => {
  let sql = 'select name, landarea from world.country order by landarea desc';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})
//6. What are the names of all the cities in the Netherlands?
app.get('/6', (req, res) => {
  let sql = 'select city.name from world.city inner join world.country on city.country_id = country.countrycode where country.name = "Netherlands"';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})
//7. What is the population of Rotterdam ?
app.get('/7', (req, res) => {
  let sql = 'select population from world.city where name = "Rotterdam"';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})
//8. What's the top 10 countries by Surface Area ?
app.get('/8', (req, res) => {
  let sql = 'select name from world.country order by landarea desc limit 10';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})
//9. What's the top 10 most populated cities?
app.get('/9', (req, res) => {
  let sql = 'select name from world.city order by population desc limit 10';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})
//10. What is the population of the world ?
app.get('/10', (req, res) => {
  let sql = 'select sum(population) from world.country';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results)
  })
})

app.listen('3000', () => {
  console.log('Server started on port 3000')
})