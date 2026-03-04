// Imports ---------------------------------------
import { Router } from "express";

import skills from "./skills-router.js";
import booking from "./bookings-router.js";
import userSkills from "./userskills-router.js";
import timeBlock from "./timeblocks-router.js";
import users from "./users-router.js"

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

// Wire up the imported routers

router.use("/skills", skills);
router.use("/bookings", booking);
router.use("/userSkills", userSkills);
router.use("/timeBlock", timeBlock);
router.use("/users", users)

// Fallback for missing routes (FIXED)

export default router;
