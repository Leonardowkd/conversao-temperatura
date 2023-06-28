const express = require('express');
const os = require('os')
const app = express();
<<<<<<< HEAD
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const conversor = require('./convert')
const bodyParser = require('body-parser');
const config = require('./config/system-life');
=======
const conversor = require('./convert')
const bodyParser = require('body-parser');
const config = require('./config/system-life');
const path = require('path');
>>>>>>> bc37d89 (atualizacoes)

app.use(config.middlewares.healthMid);
app.use('/', config.routers);
app.use(bodyParser.urlencoded({ extended: false }))
<<<<<<< HEAD
app.set('view engine', 'ejs');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
=======
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
>>>>>>> bc37d89 (atualizacoes)

app.get('/fahrenheit/:valor/celsius', (req, res) => {

    let valor = req.params.valor;
    let celsius = conversor.fahrenheitCelsius(valor);
    res.json({ "celsius": celsius, "maquina": os.hostname() });
});

app.get('/celsius/:valor/fahrenheit', (req, res) => {

    let valor = req.params.valor;
    let fahrenheit = conversor.celsiusFahrenheit(valor);
    res.json({ "fahrenheit": fahrenheit, "maquina": os.hostname() });
});

app.get('/', (req, res) => {

<<<<<<< HEAD
    res.render('index',{valorConvertido: ''});
=======
    res.render('index',{valorConvertido: '', maquina: os.hostname()});
>>>>>>> bc37d89 (atualizacoes)
});

app.post('/', (req, res) => {
    let resultado = '';

    if (req.body.valorRef) {
        if (req.body.selectTemp == 1) {
            resultado = conversor.celsiusFahrenheit(req.body.valorRef)
        } else {
            resultado = conversor.fahrenheitCelsius(req.body.valorRef)
        }
    }

<<<<<<< HEAD
    res.render('index', {valorConvertido: resultado});
=======
    res.render('index', {valorConvertido: resultado, "maquina": os.hostname()});
>>>>>>> bc37d89 (atualizacoes)
 });

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
