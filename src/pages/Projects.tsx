import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, PieChart, TrendingUp, Activity, Target, Users } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const iconMap: { [key: string]: React.ReactNode } = {
  BarChart: <BarChart className="w-8 h-8 text-blue-400" />,
  PieChart: <PieChart className="w-8 h-8 text-green-400" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-red-400" />,
  Activity: <Activity className="w-8 h-8 text-yellow-400" />,
  Target: <Target className="w-8 h-8 text-purple-400" />,
  Users: <Users className="w-8 h-8 text-indigo-400" />,
};

const Projects: React.FC = () => {
  const { projects, isAuthenticated } = useAppContext();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`} className="block">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center mb-4">
                {iconMap[project.icon as keyof typeof iconMap]}
              </div>
              <h2 className="text-xl font-semibold text-center text-gray-100">{project.title}</h2>
              <p className="mt-2 text-gray-400 text-center">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
      {isAuthenticated && (
        <div className="mt-8 text-center">
          <Link to="/add-project" className="bg-blue-600 text-gray-100 px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Add New Project
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;