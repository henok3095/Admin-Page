import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MetricsCard from "../components/MetricsCard";
import FeedbackTable from "../components/FeedbackTable";

const FeedbackPage = () => {
  const metrics = {
    total: 50,
    positive: 40,
    avgRating: 4.2,
  };

  const [feedback] = useState([
    {
      id: 1,
      user: "Alice",
      message: "Great app, very user-friendly!",
      rating: 5,
      date: "2025-04-10",
    },
    {
      id: 2,
      user: "Bob",
      message: "Needs more features.",
      rating: 3,
      date: "2025-04-09",
    },
    {
      id: 3,
      user: "Charlie",
      message: "Had some issues with login.",
      rating: 2,
      date: "2025-04-08",
    },
  ]);

  const handleSubmitFeedback = () => {
    alert("Feedback form opened"); // Replace with modal or form later
  };

  return (
    // Gradient background for depth
    <div className="flex-1 ml-64 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      {/* Animated title with modern font */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight"
      >
        User Feedback
      </motion.h1>
      {/* Metrics grid with glassmorphism */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6"
      >
        {[
          { title: "Total Feedback", value: metrics.total, color: "text-blue-400" },
          { title: "Positive Feedback", value: metrics.positive, color: "text-green-400" },
          { title: "Avg. Rating", value: `${metrics.avgRating}/5`, color: "text-gray-400" },
        ].map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <MetricsCard
              title={metric.title}
              value={metric.value}
              color={metric.color}
            />
          </motion.div>
        ))}
      </motion.div>
     
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/50"
      >
        <FeedbackTable feedback={feedback} />
      </motion.div>
    </div>
  );
};

export default FeedbackPage;