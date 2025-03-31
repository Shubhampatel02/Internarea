const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./Routes/authRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
