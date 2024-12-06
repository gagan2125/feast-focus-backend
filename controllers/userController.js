const User = require("../models/userModel")

let currentId = 1;
const generateUniqueId = () => {
    const id = `FF${currentId.toString().padStart(3, '0')}`;
    currentId++;
    return id;
};

exports.createUser = async (req, res) => {
    try {
        const { name, phone, password } = req.body;
        const uniqueId = generateUniqueId();

        const user = new User({
            uniqueId,
            name,
            phone,
            password,
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching users', error });
    }
};