import { motion } from "framer-motion";

const FeedbackTable = ({ feedback }) => {
  const getRatingStyles = (rating) => {
    if (rating >= 4) return "bg-gradient-to-r from-green-900 to-green-700 text-green-300";
    if (rating >= 3) return "bg-gradient-to-r from-yellow-900 to-yellow-700 text-yellow-300";
    return "bg-gradient-to-r from-red-900 to-red-700 text-red-300";
  };

  return (
    <div className="overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-700/80">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-100 tracking-tight">User</th>
            <th className="p-4 text-sm font-semibold text-gray-100 tracking-tight">Feedback</th>
            <th className="p-4 text-sm font-semibold text-gray-100 tracking-tight">Rating</th>
            <th className="p-4 text-sm font-semibold text-gray-100 tracking-tight">Date</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((item, index) => (
            <motion.tr
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border-t border-gray-700/50 hover:bg-gray-600/50 transition-all duration-300"
            >
              <td className="p-4">
                <div className="flex items-center space-x-3">
                  {/* Avatar with gradient */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                    {item.user[0]}
                  </div>
                  <span className="text-gray-100">{item.user}</span>
                </div>
              </td>
              <td className="p-4 text-gray-300">{item.message}</td>
              <td className="p-4">
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getRatingStyles(
                    item.rating
                  )}`}
                >
                  {item.rating}/5
                </span>
              </td>
              <td className="p-4 text-gray-400">{item.date}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;