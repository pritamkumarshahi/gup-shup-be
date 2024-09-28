const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  text: { type: String, required: true },
  sender: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  chat: { type: Schema.Types.ObjectId, ref: 'chats', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('messages', messageSchema);
