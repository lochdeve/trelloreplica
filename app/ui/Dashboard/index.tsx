'use client';
import { useState } from 'react';
import TaskList from './components/TaskList';
import './index.css';

const Dashboard = () => {
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
      {tasksLists.map((taskList) => {
        return <TaskList key={taskList.id} name={taskList.name} />;
      })}
    </div>
  );
};

export default Dashboard;
