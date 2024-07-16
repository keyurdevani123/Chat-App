 // Defaulting to port 3000 if PORT is not defined

const mongoose = require("mongoose");
const colors = require("colors");
// mongoose.connect();
mongoose.createConnection();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://devanikeyur19:kd2005@cluster0.xejqbcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
connectDB();
