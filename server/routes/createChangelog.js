import express from 'express';
import { createChangelog } from '../controllers/createChangelog.js';

const router = express.Router();

router.post('/', createChangelog);

export default router;