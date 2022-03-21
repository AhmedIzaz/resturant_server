import express from "express";
const app = express();
const port = process.env.PORT || 8000;

import mongoose from "mongoose";
import mainRoutes from "./routes/mainRoutes.js";
import useMiddlewares from "./middlewares/mainMiddlewares.js";

// =========================================
// =========================================

useMiddlewares(app);
mainRoutes(app);
app.use((req, res, next) => {
  const error = new Error("invalid route!");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.json({ error: error.message });
});
// =========================================
// =========================================

mongoose
  .connect(
    "mongodb+srv://AhmedIzazBhuiyan:AhmedIzazBhuiyan01839465030@cluster0.tksmi.mongodb.net/CafeClub?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => console.log(`server is running on ${port}`));
  })
  .catch((error) => console.log(error.message));
