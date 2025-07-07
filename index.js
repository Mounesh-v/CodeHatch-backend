import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Config/db.js';
import authRoutes from './Routes/authRoutes.js';
import courseRoutes from './Routes/courseRoutes.js'

dotenv.config();
connectDB();

const app = express();
const port=3000
app.use(cors({
  origin: "hhttps://lighthearted-frangipane-2b9661.netlify.app",
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);


app.listen(port, () =>
  console.log(`http://locahost:${port}`)
);
