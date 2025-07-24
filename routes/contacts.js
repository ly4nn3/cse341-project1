const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

// Route to GET all contacts
router.get('/',
    /*  #swagger.tags = ['Contacts']
        #swagger.summary = 'Get all contacts'
        #swagger.description = 'Returns a list of all contacts from collection.'
        #swagger.responses[200] = {
            description: 'List of contacts retrieved successfully',
            schema: [{
                _id: '60c72b2f9b1e8b001c8e4d3a',
                firstName: 'string',
                lastName: 'string',
                email: 'string',
                favoriteColor: 'string',
                birthday: '1997-08-25T00:00:00.000Z'
            }]
        }
        #swagger.responses[500] = {
            description: 'Internal server error',
            schema: {
                error: 'string'
            }
        }
    */
    contactsController.getAllContacts
);

// Route to GET contact by ID
router.get('/:id',
    /*  #swagger.tags = ['Contacts']
        #swagger.summary = 'Get a single contact'
        #swagger.description = 'Returns a contact from the collection by ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Contact ObjectId (24 character hex string)',
            required: true,
            type: 'string',
            example: '60c72b2f9b1e8b001c8e4d3a'
        }
        #swagger.responses[200] = {
            description: 'Contact retrieved successfully',
            schema: [{
                _id: '60c72b2f9b1e8b001c8e4d3a',
                firstName: 'string',
                lastName: 'string',
                email: 'string',
                favoriteColor: 'string',
                birthday: '1997-08-25T00:00:00.000Z'
            }]
        }
        #swagger.responses[404] = {
            description: 'Contact not found',
            schema: {
                error: 'Contact not found'
            }
        }
        #swagger.responses[500] = {
            description: 'Internal server error',
            schema: {
                error: 'string'
            }
        }
    */
    contactsController.getContactById
);

// Route to POST create new contact
router.post('/',
    /*  #swagger.tags = ['Contacts']
        #swagger.summary = 'Create a new contact'
        #swagger.description = 'Creates a new contact in the collection.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Contact data',
            required: true,
            schema: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'example@email.com',
                favoriteColor: 'Blue',
                birthday: '1997-08-25T00:00:00.000Z'
            }
        }
        #swagger.responses[201] = {
            description: 'Contact created successfully',
            schema: {
                _id: '60c72b2f9b1e8b001c8e4d3a',
                firstName: 'string',
                lastName: 'string',
                email: 'string',
                favoriteColor: 'string',
                birthday: '1997-08-25T00:00:00.000Z'
            }
        }
        #swagger.responses[500] = {
            description: 'Internal server error',
            schema: {
                error: 'string'
            }
        }
    */
    contactsController.createContact
);

// Route to PUT update contact by id
router.put('/:id',
    /*  #swagger.tags = ['Contacts']
        #swagger.summary = 'Update a contact'
        #swagger.description = 'Updates an existing contact in the collection by ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Contact ObjectId (24 character hex string)',
            required: true,
            type: 'string',
            example: '60c72b2f9b1e8b001c8e4d3a'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Updated contact data',
            required: true,
            schema: {
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'updated.example@email.com',
                favoriteColor: 'Red',
                birthday: '1997-08-25T00:00:00.000Z'
            }
        }
        #swagger.responses[200] = {
            description: 'Contact updated successfully',
            schema: {
                _id: '60c72b2f9b1e8b001c8e4d3a',
                firstName: 'string',
                lastName: 'string',
                email: 'string',
                favoriteColor: 'string',
                birthday: '1997-08-25T00:00:00.000Z'
            }
        }
        #swagger.responses[404] = {
            description: 'Contact not found',
            schema: {
                error: 'Contact not found'
            }
        }
        #swagger.responses[500] = {
            description: 'Internal server error',
            schema: {
                error: 'string'
            }
        }
    */
    contactsController.updateContact
);

// Route to DELETE contact by id
router.delete('/:id',
    /*  #swagger.tags = ['Contacts']
        #swagger.summary = 'Delete a contact'
        #swagger.description = 'Deletes a contact from the collection by ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Contact ObjectId (24 character hex string)',
            required: true,
            type: 'string',
            example: '60c72b2f9b1e8b001c8e4d3a'
        }
        #swagger.responses[204] = {
            description: 'Contact deleted successfully (no content is returned)'
        }
        #swagger.responses[404] = {
            description: 'Contact not found',
            schema: {
                error: 'Contact not found'
            }
        }
        #swagger.responses[500] = {
            description: 'Internal server error',
            schema: {
                error: 'string'
            }
        }
    */
    contactsController.deleteContact
);

module.exports = router;