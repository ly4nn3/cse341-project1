const { client } = require('../db/config');
const { ObjectId } = require('mongodb');

const db = client.db("db");
const collection = db.collection("contacts");

// To GET all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await collection.find({}).toArray();
        res.json(contacts);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// To GET contact by ID
exports.getContactById = async (req, res) => {
    try {
        const contact = await collection.findOne({
            _id: ObjectId.createFromHexString(req.params.id) });
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.json(contact);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// To POST (create) new contact
exports.createContact = async (req, res) => {
    try {
        const{ insertedId } = await collection.insertOne(req.body);
        const newContact = await collection.findOne({ _id: insertedId });
        res.status(201).json(newContact);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// To PUT (update) contact by ID
exports.updateContact = async (req, res) => {
    try {
        const { matchedCount } = await collection.updateOne(
            { _id: ObjectId.createFromHexString(req.params.id) },
            { $set: req.body }
        );
        if (!matchedCount) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        const updated = await collection.findOne({
            _id: ObjectId.createFromHexString(req.params.id)
        });
        res.json(updated);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

// To DELETE contact by ID
exports.deleteContact = async (req, res) => {
    try {
        const { deletedCount } = await collection.deleteOne({
            _id: ObjectId.createFromHexString(req.params.id)
        });
        if (!deletedCount) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(204).end();
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}