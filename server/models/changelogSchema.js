import mongoose from "mongoose";

const changelogSchema = mongoose.Schema({
  date: Number,
  version: String,
  content: String,
});

const Changelog = mongoose.model('ChangelogSchema', changelogSchema);

export default Changelog;