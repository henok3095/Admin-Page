import { useState } from "react";
import { Send, MessageSquare } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Chat = () => {
  // Sample users and conversations (unchanged)
  const [users] = useState([
    {
      id: 1,
      name: "Henok",
      lastMessage: "Hi, how can I help?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      name: "Eyoab",
      lastMessage: "I have a question about feedback.",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      name: "Yoseph",
      lastMessage: "Can you check my submission?",
      timestamp: "10:35 AM",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({
    1: [
      { id: 1, sender: "Alice", content: "Hi, how can I help?", timestamp: "10:30 AM" },
      { id: 2, sender: "You", content: "I need assistance with feedback.", timestamp: "10:31 AM" },
    ],
    2: [
      { id: 1, sender: "Bob", content: "I have a question about feedback.", timestamp: "10:32 AM" },
    ],
    3: [
      { id: 1, sender: "Charlie", content: "Can you check my submission?", timestamp: "10:35 AM" },
      { id: 2, sender: "You", content: "Sure, I'll look into it.", timestamp: "10:36 AM" },
    ],
  });
  const [newMessage, setNewMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openChat = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setSelectedUser(null);
    setNewMessage("");
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedUser) return;

    const message = {
      id: messages[selectedUser.id].length + 1,
      sender: "You",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages({
      ...messages,
      [selectedUser.id]: [...messages[selectedUser.id], message],
    });
    setNewMessage("");
  };

  return (
   
    <div className="flex-1 ml-64 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      {/* Animated title with modern font */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight"
      >
        Chat
      </motion.h1>
      {/* User list with glassmorphism and shadow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-700/50"
      >
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Conversations</h2>
        <div className="space-y-3">
          {users.map((user, index) => (
            // Animated user row
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl hover:bg-gray-600/50 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-600/30"
            >
              <div className="flex items-center space-x-3">
                {/* Avatar with gradient */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  {user.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-100">{user.name}</p>
                  <p className="text-xs text-gray-400 truncate max-w-xs">{user.lastMessage}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xs text-gray-400">{user.timestamp}</span>
                {/* Enhanced Respond button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openChat(user)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm shadow-md"
                >
                  Respond
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chat Modal with enhanced styling */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeChat}>
          {/* Backdrop with blur */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md sm:max-w-lg bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-700/50 transform transition-all">
                  <Dialog.Title className="text-2xl font-bold text-white mb-4 tracking-tight">
                    Chat with {selectedUser?.name}
                  </Dialog.Title>
                  {/* Chat messages with animation */}
                  <div className="h-64 bg-gray-900/80 rounded-xl p-4 overflow-y-auto mb-4 border border-gray-700/30">
                    <AnimatePresence>
                      {selectedUser &&
                        messages[selectedUser.id].map((msg) => (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className={`mb-4 flex ${
                              msg.sender === "You" ? "justify-end" : "justify-start"
                            }`}
                          >
                            <div
                              className={`relative max-w-xs p-3 rounded-lg ${
                                msg.sender === "You"
                                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                                  : "bg-gray-700/80 text-gray-200"
                              } shadow-sm hover:shadow-md transition-shadow duration-200`}
                            >
                              {/* Chat bubble tail */}
                              <div
                                className={`absolute w-3 h-3 top-3 ${
                                  msg.sender === "You"
                                    ? "-right-1.5 rotate-45 bg-blue-600"
                                    : "-left-1.5 -rotate-45 bg-gray-700/80"
                                }`}
                              />
                              <p className="text-sm font-medium">{msg.sender}</p>
                              <p className="text-sm">{msg.content}</p>
                              <p className="text-xs text-gray-400 mt-1">{msg.timestamp}</p>
                            </div>
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </div>
                  {/* Input form with glow */}
                  <form
                    onSubmit={handleSendMessage}
                    className="flex items-center bg-gray-900/80 rounded-xl p-2 border border-gray-700/50 shadow-inner"
                  >
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none p-2 text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                      className="p-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                  {/* Close button with gradient */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeChat}
                    className="mt-4 w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-md hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md"
                  >
                    Close
                  </motion.button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Chat;