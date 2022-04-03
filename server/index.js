import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import getChangelogsRouter from './routes/getChangelogs.js';
import createChangelogsRouter from './routes/createChangelog.js';
import deleteChangelogRouter from './routes/deleteChangelog.js';
import getLatestChangelogRouter from './routes/getLatestChangelog.js';
import getUsersRouter from './routes/getUsers.js';

import User from "./models/userSchema.js";

dotenv.config();

const PORT = process.env.PORT || 5483;
const app = express();

const url = process.env.MONGODB_URL;

app.use(bodyParser({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/get-changelogs', getChangelogsRouter);
app.use('/create-changelog', createChangelogsRouter);
app.use('/delete-changelog', deleteChangelogRouter);
app.use('/latest-changelog', getLatestChangelogRouter);
app.use('/get-users', getUsersRouter);

let isLoggedIn = false;

app.get('/login-state', (req, res) => {
  res.json({ state: isLoggedIn });
  isLoggedIn = false;
});

app.post('/login', async (req, res) => {
  const userData = req.body;

  User.exists(userData).then(info => {
    if(info) {
      res.json({ status: 'ok' });
      isLoggedIn = true;
    } else {
      res.json({ status: 'error' })
      isLoggedIn = false;
    }
  });  
});

app.get('/', (req, res) => {
  res.send('<h2>Server is running!</h2>');
});

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('MongoDB is connected');

  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}).catch(err => console.log(err.message));