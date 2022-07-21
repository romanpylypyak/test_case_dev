const express = require('express')
const app = express()

const port = 8090;
const expbs = require('express-handlebars');
const path = require('path');
const scrape = require('./scrape')


app.set('views', path.join(__dirname, '/'));
const hbs = expbs.create({
    extname: '.hbs',
    defaultLayout: false,
    layoutsDir: path.join(__dirname, '/'),
    helpers: require('./utils/handebar-helpers'),
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

const init = async (req, res) => {
    let result = [];

    try{
        let json = await scrape.get_json();        
        result.push(json);

        let xml = await scrape.parse_xml();
        result.push(xml);

        result = result.flat();
        result.sort((a, b) => a.date > b.date);

        res.render('index', {
            data: result
        });
    }
    catch(e){
        console.log(e);
        res.send('Error:' + e.message)
    }
    
}
app.use('/', init);

app.listen(port, () => {
    console.log('App available at: http://localhost:'+port);
})
  