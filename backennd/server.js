import express from 'express';
import router from './modules/content/route.js';
import cors from 'cors';
import { connectDB } from './configs/mongo.js'
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;
const vercelRegex = /^https:\/\/.*\.vercel\.app$/;

dotenv.config();
const app = express();
connectDB();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({
    origin: vercelRegex,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});