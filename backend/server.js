const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: "*"
}));

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Routes
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("E-commerce API Running");
});

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        message: "Not found"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});