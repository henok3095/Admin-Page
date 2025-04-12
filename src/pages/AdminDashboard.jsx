import { useState } from "react";
import MetricsCard from "../components/MetricsCard";
import TaskTable from "../components/TaskTable";

const AdminDashboard = () => {
  
  const metrics = {
    assigned: 25,
    completed: 18,
    avgTime: 4.5,
  };

  const [tasks, setTasks] = useState([
    { id: 1, title: "Update Website", agent: "Alice", status: "In Progress" },
    { id: 2, title: "Fix Bugs", agent: "Bob", status: "To Do" },
    { id: 3, title: "Deploy App", agent: "Charlie", status: "Completed" },
  ]);

  const handleReassign = (task) => {
    alert(`Reassigning task: ${task.title}`); 
  };

  const handleCreateTask = () => {
    alert("Create task dialog opened"); 
  };

  return (
    <div className="flex-1 ml-64 p-4 sm:p-6 lg:p-8 bg-gray-900 text-white">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold">Admin Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <MetricsCard
          title="Tasks Assigned"
          value={metrics.assigned}
          color="text-blue-400"
        />
        <MetricsCard
          title="Tasks Completed"
          value={metrics.completed}
          color="text-green-400"
        />
        <MetricsCard
          title="Avg. Completion Time"
          value={`${metrics.avgTime} hrs`}
          color="text-gray-400"
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 mb-6"
        onClick={handleCreateTask}
      >
        Create New Task
      </button>
      <TaskTable tasks={tasks} onReassign={handleReassign} />
    </div>
  );
};

export default AdminDashboard;