// Imports ---------------------------------------
import { Router } from "express";

import skills from "./skills-router.js";

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

// Wire up the imported routers

router.use("/skills", skills);

// Fallback for missing routes (FIXED)

export default router;
