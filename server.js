import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import { config } from "./src/config/envConfig.js";

const startServer = async () => {
  await connectDB();
  const PORT = config.port || 3000;

  app.listen(PORT, () => {
    console.log(`Server is listening on port: http://localhost:${PORT}`);
  });
};

startServer();
