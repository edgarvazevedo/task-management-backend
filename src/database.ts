import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        if (!MONGODB_URI) {
            throw new Error('MongoDB URI not specified in .env file');
        }

        await mongoose.connect(MONGODB_URI);

        console.log('MongoDB connected');
    } catch (err) {
        let errorMessage = 'Unknown error connecting to MongoDB';
        if (err instanceof mongoose.Error) {
            errorMessage = err.message;
        }
        console.error(errorMessage);
        process.exit(1);
    }
};

export default connectDB;
