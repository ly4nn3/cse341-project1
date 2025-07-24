const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./db/config');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// R O U T E S
// API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API routes
app.use('/', require('./routes'));

// Connect to DB
const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
}

startServer();