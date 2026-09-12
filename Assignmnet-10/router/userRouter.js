const express = require('express');
const db = require('../config/firebase');
const userSchema = require('../schema/userSchema');

const router = express.Router();

router.post('/users', async (req, res) => {
    try {
        const { error, value } = userSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const docRef = await db.collection('users').add(value);

        res.status(201).json({
            message: 'User successfully added',
            id: docRef.id
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;