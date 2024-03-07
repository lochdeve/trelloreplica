import { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import './index.css';

type AddCardButtonProps = {
  addCard: (title: string) => void;
  enableAddCard: boolean;
  updateEnableAddCard: (status: boolean) => void;
};

const AddCardButton: React.FC<AddCardButtonProps> = ({
  addCard,
  enableAddCard,
  updateEnableAddCard,
}) => {
  const [title, setTitle] = useState('');

  if (!enableAddCard)
    return (
      <div className='addcard' onClick={() => updateEnableAddCard(true)}>
        <HiPlus />
        <button className='addcardbutton'>Añada una tarjeta</button>
      </div>
    );

  return (
    <div className='addNewCard'>
      <input
        className='titleInput'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Introduzca el título de la tarjeta...'
      />
      <div>
        <button
          className='addCardButton'
          onClick={() => {
            addCard(title);
            updateEnableAddCard(false);
            setTitle('');
          }}
        >
          Añadir tarjeta
        </button>
        <button
          className='closeaddcardbutton'
          onClick={() => updateEnableAddCard(false)}
        >
          <MdClose color='white' />
        </button>
      </div>
    </div>
  );
};

export default AddCardButton;
