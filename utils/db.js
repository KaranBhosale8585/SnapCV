import mongoose from "mongoose";

console.log(process.env.MONGODB_URI);

const dbConnect = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI); // No need to pass useNewUrlParser and useUnifiedTopology
};

export default dbConnect;
