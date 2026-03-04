// Imports ---------------------------------------
import { Router } from "express";

import modulesRouter from "./modules-router.js";

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

// Wire up the imported routers

router.use("/modules", modulesRouter);

// Fallback for missing routes (FIXED)
router.use((req, res) =>
  res.status(404).json({
    message:
      "Specified endpoint not found. Please refer to the documentation below:",
    listOfEndpoints,
  }),
);

export default router;
