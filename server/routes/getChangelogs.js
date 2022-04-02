import express from "express";
import { getChangelogs } from "../controllers/getChangelogs.js";

const router = express.Router();

router.get('/', getChangelogs);

export default router;