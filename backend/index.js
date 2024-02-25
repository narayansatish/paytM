const express = require("express");
const cors = require('cors');
import { userRoute } from "./routes/userRoute";
const app = express();
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api/v1/users', userRoutes);

