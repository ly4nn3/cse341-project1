const swagggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'API for managing contacts collection'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https'],
}

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swagggerAutogen(outputFile, endpointsFiles, doc);