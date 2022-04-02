import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: String,
  id: String,
  password: String,
});

const User = mongoose.model('UserSchema', userSchema);

export default User;