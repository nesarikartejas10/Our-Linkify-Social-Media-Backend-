import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const startServer = async () => {
  await connectDB();
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is listening on port: http://localhost:${PORT}`);
  });
};

startServer();
