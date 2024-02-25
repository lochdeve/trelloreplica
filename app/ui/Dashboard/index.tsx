'use client';
import { DashboardType } from '@/app/types';
import { useState } from 'react';
import TaskList from './components/TaskList';
import ToolBar from './components/ToolBar';
import './index.css';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState<DashboardType>({
    id: 1,
    name: 'Tablero 1',
  });
  const [tasksLists, setTasksLists] = useState([
    {
      id: 0,
      name: 'Lista de tareas',
    },
    {
      id: 1,
      name: 'En progreso',
    },
    {
      id: 2,
      name: 'Hecho',
    },
  ]);
  return (
    <div className='dashboard'>
      <ToolBar dashboardInfo={dashboard} />
      <div className='tasklist-container'>
        {tasksLists.map((taskList) => {
          return <TaskList key={taskList.id} name={taskList.name} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
