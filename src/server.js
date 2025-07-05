require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const baseRoutes = require("./routes/base.routes");
const userRoutes = require("./routes/user.routes");
const { generateLogs } = require("./middlewares/logs");

const app = express();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();

        app.use(express.json());
        app.use(generateLogs());          // custom middleware for all routes
        app.use(express.urlencoded({ extended: false })); // middleware to parse form data

        app.use("/", baseRoutes);
        app.use("/user", userRoutes);

        app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
    } catch (error) {
        console.log("Error starting server ", error);
        process.exit(1);
    }
}

startServer();