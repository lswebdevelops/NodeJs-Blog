const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      tls: true, // Specify TLS
      tlsAllowInvalidCertificates: true, // This may be needed for self-signed certificates

    });
    console.log(`data base connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
