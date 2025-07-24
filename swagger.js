const swagggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'API for managing contacts collection'
    },
    host: 'cse341-project1-zbnf.onrender.com',
    schemes: ['https'],
}

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swagggerAutogen(outputFile, endpointsFiles, doc);