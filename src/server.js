require('./lib/system/config.js'),
require('dotenv').config()
const express = require('express')
const path = require('path')
const CFonts = require('cfonts')
const bodyParser = require('body-parser')
const ip = require('request-ip')
const morgan = require('morgan')

const PORT = process.env.PORT || 8080

const run = async () => {
    const app = express()
    morgan.token('clientIp', (req) => req.clientIp)
    app.set('json spaces', 3)
        .set('view engine', 'ejs')
        .engine('ejs', require('ejs').__express)
        .use(express.json())
        .use(ip.mw())
        .use(morgan(':clientIp :method :url :status :res[content-length] - :response-time ms'))
        .use(bodyParser.json({
            limit: '50mb'
        }))
        .use(bodyParser.urlencoded({
            limit: '50mb',
            extended: true,
            parameterLimit: 50000
        }))
        .use(express.static(path.join(__dirname, 'public')))
        .use('/', await require('./handler.js'))
        .get('*', (req, res) => res.status(404).render("404"))
    app.disable('x-powered-by')
    app.use((req, res, next) => {
        res.setHeader('X-Powered-By', 'NXR-SERVER')
        next()
    })

    app.listen(PORT, () => {
        CFonts.say('Api Zioo', { 
            font: 'tiny', 
            align: 'center', 
            colors: ['system'] 
        });
        CFonts.say(`Server listening on port ---> ${PORT}`, { 
            font: 'console', 
            align: 'center', 
            colors: ['system'] 
        });
    });
};

run().catch((err) => {
    console.error('Error al iniciar el servidor:', err);
    process.exit(1)
});
