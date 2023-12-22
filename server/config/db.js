const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      tls: true,
      tlsAllowInvalidCertificates: true,
    });
    console.log(`Database connected: ${conn.connection.host}`);
    return conn; // Return the Mongoose connection object
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to be caught in the calling code
  }
};

module.exports = connectDB;
