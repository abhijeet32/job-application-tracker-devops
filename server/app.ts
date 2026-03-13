import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDB } from './config/db';
import userRoutes from './routes/userRoutes';
import JobRoutes from './routes/JobRoutes';
import contactRoutes from './routes/contactRoutes';
import documentRouter from './routes/documentRoutes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = Number(process.env.PORT) || 4000;

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/job", JobRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/document", documentRouter);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
