import type { CardType } from '@/app/types/index';
import { useState } from 'react';
import { GoProjectTemplate } from 'react-icons/go';
import AddCardButton from './components/AddCardButton';
import Card from './components/Card';
import './index.css';

const CardList = (cardListInfo: {
  name: string;
  id: string;
  cardsArray: CardType[];
}) => {
  const [cards, setCards] = useState<CardType[]>(cardListInfo.cardsArray ?? []);
  const addCard = (title: string) => {
    const newCard = {
      id: (cards.length + 1).toString(),
      title,
    };
    setCards([...cards, newCard]);
  };
  const [enableAddCard, setEnableAddCard] = useState(false);
  const updateEnableAddCard = (status: boolean) => {
    setEnableAddCard(status);
  };

  return (
    <div className='cardlist' key={cardListInfo.id}>
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
        <AddCardButton
          addCard={addCard}
          enableAddCard={enableAddCard}
          updateEnableAddCard={updateEnableAddCard}
        />
        {enableAddCard ? null : (
          <div className='createtemplate'>
            <button className='templatebutton'>
              <GoProjectTemplate />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
