const MetricsCard = ({ title, value, color }) => {
    return (
      <div className="bg-gray-800/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-100 tracking-tight">{title}</h3>
        <p className={`text-2xl sm:text-3xl font-bold ${color} mt-2`}>{value}</p>
      </div>
    );
  };
  
  export default MetricsCard;