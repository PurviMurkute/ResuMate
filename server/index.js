import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;
connDB();

app.get('/health', async(req, res)=> {
    res.status(200).json({
        success: true,
        message: "Server is running"
    })
})
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})