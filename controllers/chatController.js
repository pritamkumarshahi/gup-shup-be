const Chat = require('../models/Chat');
const Message = require('../models/Messages'); // Assuming you have a Message model

// Create a new chat or append a message to an existing chat
exports.createChat = async (req, res) => {
  const { text, participants, sender } = req.body;

  try {
    // Check if a chat already exists between participants
    let chat = await Chat.findOne({ participants: { $all: participants } });

    // If no chat exists, create a new one
    if (!chat) {
      chat = new Chat({ participants });
      await chat.save();
    }

    // Create and save the new message
    const newMessage = new Message({
      text,
      sender,
      chat: chat._id, // Reference to the chat
    });

    await newMessage.save();

    // Append the message to the chat
    chat.messages.push(newMessage._id); // Assuming Chat schema has a messages array
    await chat.save();

    return res.status(201).json({
      message: 'Message sent successfully',
      chatId: chat._id,
      newMessage,
    });
  } catch (error) {
    console.error('Error creating chat or sending message:', error);
    return res.status(500).json({ error: 'Chat creation or message sending failed' });
  }
};



exports.getChats = async (req, res) => {
  const { recipientId } = req.query;
  const userId = req.userId; // Assuming you get this from the token middleware

  try {
    // Check if a chat exists between the authenticated user and the recipient
    const chat = await Chat.findOne({
      participants: { $all: [userId, recipientId] }
    })
      .populate('participants', 'name email') // Populate participants' details
      .populate('messages'); // Populate messages in the chat

    if (!chat) {
      return res.status(404).json({ error: 'No chat found between the users' });
    }

    return res.status(200).json(chat);
  } catch (error) {
    console.error('Error fetching chat:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

