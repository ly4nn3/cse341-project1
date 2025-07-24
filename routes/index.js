const express = require('express');
const router = express.Router();

router.get('/',
    // #swagger.tags = ['Hello World']
    // #swagger.summary = 'Hello World Route'
    // #swagger.description = 'Default route that returns a Hello World message.'
    (req, res) => {
        res.send('Hello World!');
    }
);

router.use('/contacts', require('./contacts'));

module.exports = router;