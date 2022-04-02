import Changelog from '../models/changelogSchema.js';

export const createChangelog = async (req, res) => {
  const data = req.body;
  console.log(data);

  const newChangelog = new Changelog(data);

  try {
    await newChangelog.save();

    res.json(newChangelog)
  } catch (error) {
    res.send({ message: error.message });
  }
}