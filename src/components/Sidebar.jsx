import { NavLink } from "react-router-dom";
import { Home, CheckSquare, MessageSquare, LogOut } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { path: "/", label: "Feedback", Icon: Home },

    { path: "/chat", label: "Chat", Icon: MessageSquare },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-semibold">Feedback</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(({ path, label, Icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md hover:bg-gray-800 transition-colors duration-200 ${
                isActive ? "bg-gray-800" : ""
              }`
            }
            end
          >
            <Icon className="w-5 h-5 mr-2" />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-800">
        <button
          className="w-full flex items-center p-2 rounded-md hover:bg-red-700 transition-colors duration-200"
          onClick={() => alert("Logout clicked")}
        >
         
        </button>
      </div>
    </div>
  );
};

export default Sidebar;