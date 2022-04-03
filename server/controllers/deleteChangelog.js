import Changelog from '../models/changelogSchema.js';

export const deleteChangelog = async (req, res) => {
  const data = req.body;

  Changelog.findByIdAndDelete(data.id).then(() => {
    console.log('Doc deleted!')
  }) 
} 