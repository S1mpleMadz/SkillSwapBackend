// Imports --------------------------------
import express from "express";
import "dotenv/config";
import cors from "cors";
import apiRouter from "./routers/index.js";

// Configure express app ------------------
const app = new express();

// Middleware -----------------------------
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes ---------------------------------
app.use("/api", apiRouter);

// Start server ---------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server started on port ${PORT}`),
);
