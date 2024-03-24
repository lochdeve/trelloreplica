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
  const manageOnClick = () => {
    if (title === '') {
      updateEnableAddCard(false);
      return;
    }
    addCard(title);
    updateEnableAddCard(false);
    setTitle('');
  };

  if (!enableAddCard)
    return (
      <div className='addcard' onClick={() => updateEnableAddCard(true)}>
        <HiPlus />
        <button className='addcardbutton'>Añada una tarjeta</button>
      </div>
    );

  return (
    <div className='addNewCard'>
      <textarea
        className='titleInput'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            manageOnClick();
          }
        }}
        placeholder='Introduzca un título para esta tarjeta...'
      />
      <div>
        <button className='addCardButton' onClick={manageOnClick}>
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
