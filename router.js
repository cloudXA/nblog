var express = require('express');

var router = express.Router();

router.get('/', (request, response)=> {
    response.render('index.html')
})

router.get('/login', (request, response) => {
    response.render('login.html')
})

router.post('/login', (request, response) => {
    // var 
})

router.get('/register', (request, response) => {
    response.render('register.html');
})

router.post('/register', (request, response) => {

})

router.get('/header', (request, response) => {
    response.render('_partials/header.html');
})

router.get('/home', (request, response) => {
    response.render('_layouts/home.html')
})
module.exports = router;