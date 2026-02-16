import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
    process.exit(1);
  }
};
