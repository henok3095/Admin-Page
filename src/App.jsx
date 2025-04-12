import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FeedbackPage from "./pages/FeedbackPage";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<FeedbackPage />} />
          <Route path="/tasks" element={<div className="flex-1 ml-64 p-8 bg-gray-900 text-white">Manage Tasks Page</div>} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;