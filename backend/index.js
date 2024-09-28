import mongoose from "mongoose";
import { app } from "./app.js";
const connectdb = async function () {
  try {
    const PORT = process.env.PORT || 5000;
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

await connectdb();
