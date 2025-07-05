const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
    const allDbUsers = await User.find({}).lean();
    return res.json(allDbUsers);
})

router.post('/createUser', async (req, res) => {
    try {
        const body = req.body;
        const { name, email, password, gender } = body;
        if (!body || !body.name || !body.email || !body.password || !body.gender)
            return res.status(400).json({ msg: 'Enter all fields for Creation', success: false });

        await User.create({ name, email, password, gender })
        return res.status(201).json({ msg: 'User created', success: true });
    } catch (err) {
        console.error(err);
        return res.json({ message: "User Creation failed", success: false })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.json(user);
    } catch (err) {
        console.error(err);
        return res.json({ message: "User cannot be found with given Id", success: false })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { name, email, password, gender } = req.body;
        const body = req.body;

        if (!body || !body.name || !body.email || !body.password || !body.gender)
            return res.status(400).json({ msg: 'Enter all fields for Updation', success: false });

        // hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        await User.findByIdAndUpdate(req.params.id, { name, email, password: hashedPassword, gender });
        return res.json({ status: "Updated", success: true })
    } catch (err) {
        console.error(err);
        return res.json({ message: "User Updation failed", success: false })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.json({ status: "User Deleted", success: true })
    } catch (err) {
        console.error(err);
        return res.json({ message: "User deletion failed", success: false })
    }
})

module.exports = router;