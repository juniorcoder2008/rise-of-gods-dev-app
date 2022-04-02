import Changelog from '../models/changelogSchema.js';

export const getChangelogs = async (req, res) => {
  const changelogs = await Changelog.find();

  res.status(200).json(changelogs);
};