const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Initialization
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: app.get('views') + '/layout',
    partialsDir:  app.get('views') + '/partials',
}));

//Routes
app.use(require('./routes'));

//Statics Files
app.use(express.static('public'));

//Start server On
app.listen(app.get('port'), () =>{
    console.log('Server On: ' + app.get('port'));
});