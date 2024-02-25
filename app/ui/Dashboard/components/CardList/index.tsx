import type { CardType } from '@/app/types/index';
import { useState } from 'react';
import { GoProjectTemplate } from 'react-icons/go';
import '../../index.css';
import AddCardButton from './components/AddCardButton';
import Card from './components/Card';

const CardList = (cardListInfo: { name: string }) => {
  const [cards, setCards] = useState<CardType[]>([
    {
      id: 1,
      title: 'Card 1',
      description: 'This is Card 1',
      done: false,
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is Card 2',
      done: false,
    },
  ]);

  return (
    <div className='cardlist'>
      <span
        style={{
          fontSize: '15px',
          marginLeft: '10px',
          color: '##b7c2ce',
          fontWeight: 'bold',
          padding: '5px 0 5px 0',
        }}
      >
        {cardListInfo.name}
      </span>
      {cards.map((task) => {
        return <Card key={task.id} cardInfo={task} />;
      })}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <AddCardButton />
        <div className='createtemplate'>
          <button className='templatebutton'>
            <GoProjectTemplate />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
