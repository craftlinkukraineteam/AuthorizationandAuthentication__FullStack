import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    try {
        console.log('server is running on port ' + PORT);
    }
    catch (err) {
        console.log(err);
    }
    if (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
    console.log(`server is running on port ${PORT}`);
});