require("dotenv").config();
const app = require("./app.js");
const { connectDatabase } = require("./database/connect-database.js");

async function startServer() {
  try {
    console.log("Starting the server...");
    await connectDatabase();
    console.log("Server is ready and data has been synchronized.");
    await app.listen(process.env.PORT || 3000);
    console.log(`Server running at ${process.env.PORT || 3000}`);
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1); // Exit with a failure code
  }
}

startServer();
