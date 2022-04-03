import express from 'express';
import { deleteChangelog } from '../controllers/deleteChangelog.js';

const router = express.Router();

router.post('/', deleteChangelog);

export default router;