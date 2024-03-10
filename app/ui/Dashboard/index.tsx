'use client';
import { CardListType, DashboardType } from '@/app/types';
import { useState } from 'react';
import AddList from './components/AddList';
import CardList from './components/CardList';
import SideBar from './components/SideBar';
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
        cards: [
          {
            id: 'firstCard',
            title: 'Tarea 1',
          },
          {
            id: 'secondCard',
            title: 'Tarea 2',
          },
          {
            id: 'thirdCard',
            title: 'Tarea 3',
          },
        ],
      },
      {
        id: 1,
        title: 'En progreso',
        description: 'Tareas en progreso',
        done: false,
        cards: [{ id: 'firstCard', title: 'Tarea 1' }],
      },
      {
        id: 2,
        title: 'Hecho',
        description: 'Tareas completadas',
        done: true,
        cards: [],
      },
    ],
  });

  const addCardList = (title: string) => {
    const newCardList: CardListType = {
      id: dashboard.cardLists.length,
      title,
      description: '',
      done: false,
      cards: [],
    };
    setDashboard({
      ...dashboard,
      cardLists: [...dashboard.cardLists, newCardList],
    });
  };

  return (
    <div className='dashboard'>
      <SideBar />
      <ToolBar dashboardInfo={dashboard} />
      <div className='cardlist-container'>
        {dashboard.cardLists.map((taskList) => {
          return (
            <CardList
              key={taskList.id}
              name={taskList.title}
              id={taskList.id.toString()}
              cardsArray={taskList.cards}
            />
          );
        })}

        <AddList updateDashboard={addCardList} />
      </div>
    </div>
  );
};

export default Dashboard;
