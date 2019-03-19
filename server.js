const express = require('express');
const app = express();
const hbs=require('hbs');
require('./hbs/helpers/helpers');


const port=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine','hbs');



app.get('/', function (req, res) {
    res.render('home',{
        nombre:'rAmOn rUe'
    });
})
app.get('/about', function (req, res) {
    res.render('about');
})

// app.get('/data', function (req, res) {          
//     res.send('Hola DATA');
// });
 
app.listen(port,()=>{
    console.log(`Server on port ${port}`);
});
