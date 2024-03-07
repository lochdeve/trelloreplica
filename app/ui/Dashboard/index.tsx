'use client';
import { DashboardType } from '@/app/types';
import { useState } from 'react';
import AddList from './components/AddList';
import CardList from './components/CardList';
import ToolBar from './components/ToolBar';
import './index.css';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState<DashboardType>({
    id: 1,
    name: 'Tablero 1',
    cardLists: [
      {
        id: 0,
        title: 'Lista de tareas',
        description: 'Lista de tareas por hacer',
        done: false,
      },
      {
        id: 1,
        title: 'En progreso',
        description: 'Tareas en progreso',
        done: false,
      },
      {
        id: 2,
        title: 'Hecho',
        description: 'Tareas completadas',
        done: true,
      },
    ],
  });

  const addCardList = (title: string) => {
    const newCardList = {
      id: dashboard.cardLists.length,
      title,
      description: '',
      done: false,
    };
    setDashboard({
      ...dashboard,
      cardLists: [...dashboard.cardLists, newCardList],
    });
  };

  return (
    <div className='dashboard'>
      <ToolBar dashboardInfo={dashboard} />
      <div className='cardlist-container'>
        {dashboard.cardLists.map((taskList) => {
          return (
            <CardList
              key={taskList.id}
              name={taskList.title}
              id={taskList.id.toString()}
            />
          );
        })}

        <AddList updateDashboard={addCardList} />
      </div>
    </div>
  );
};

export default Dashboard;
