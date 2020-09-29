import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  object: { type: String, default: 'user' },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  stripe: { type: Schema.Types.Mixed, default: {} }
}, {
  minimize: false,
  timestamps: true,
  collection: 'users'
})

UserSchema.plugin(uniqueValidator)

export default mongoose.models.User || mongoose.model('User', UserSchema)
