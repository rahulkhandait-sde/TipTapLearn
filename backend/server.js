// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const Web3 = require('web3');
const { abi, evm } = require('./P2PLearningPlatform.json'); // Your compiled smart contract

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Web3 Setup
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));
const contract = new web3.eth.Contract(abi, process.env.CONTRACT_ADDRESS);

// Endpoint to create a course
app.post('/api/courses', async (req, res) => {
    const { price, instructorAddress } = req.body;
    const accounts = await web3.eth.getAccounts();
    
    try {
        const result = await contract.methods.createCourse(price).send({ from: accounts[0] });
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Endpoint to purchase a course
app.post('/api/courses/:id/purchase', async (req, res) => {
    const { id } = req.params;
    const { amount } = req.body; // amount is the price

    const accounts = await web3.eth.getAccounts();

    try {
        const result = await contract.methods.purchaseCourse(id).send({ from: accounts[0], value: amount });
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Endpoint to send a tip
app.post('/api/courses/:id/tip', async (req, res) => {
    const { id } = req.params;
    const { amount } = req.body;

    const accounts = await web3.eth.getAccounts();

    try {
        const result = await contract.methods.sendTip(id).send({ from: accounts[0], value: amount });
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Endpoint to deactivate a course
app.post('/api/courses/:id/deactivate', async (req, res) => {
    const { id } = req.params;

    const accounts = await web3.eth.getAccounts();

    try {
        const result = await contract.methods.deactivateCourse(id).send({ from: accounts[0] });
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
