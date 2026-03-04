// Imports ---------------------------------------
import { Router } from "express";

import skills from "./skills-router.js";
import booking from "./bookings-router.js";

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

// Wire up the imported routers

router.use("/skills", skills);
router.use("/bookings", booking);

// Fallback for missing routes (FIXED)

export default router;
