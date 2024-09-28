const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  messages: [{ type: Schema.Types.ObjectId, ref: 'messages' }], // To store message references
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('chats', chatSchema);
