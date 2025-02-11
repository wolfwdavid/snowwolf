// 📌 Import Dependencies
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import User from './models/user.js'; // ✅ Corrected Import Path

// 📌 Load Environment Variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/snowwolfDB';

// 📌 Middleware
app.use(cors());
app.use(express.json()); // ✅ Use built-in JSON parser
app.use((req, res, next) => {
    console.log(`📌 [${req.method}] ${req.url} - ${new Date().toISOString()}`);
    next();
});

// 📌 Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); // Exit process if connection fails
    });

// 📌 Register Route
app.post('/register', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // ✅ Validate Input Fields
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // ✅ Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // ✅ Hash Password (10 Salt Rounds)
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Create New User
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        });

        await newUser.save();

        console.log(`✅ New User Registered: ${email}`);

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("❌ Server Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

// 📌 Root Route
app.get('/', (req, res) => {
    res.send("🚀 Snowwolf API is running...");
});

app.use(express.json());  // Required for parsing JSON data

// 📌 Handle Invalid Routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// 📌 Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
