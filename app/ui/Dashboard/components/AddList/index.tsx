import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import './index.css';

const AddList: React.FC<{
  updateDashboard: (title: string) => void;
}> = ({ updateDashboard }) => {
  const [enabled, setEnabled] = useState(false);
  const [title, setTitle] = useState('');
  if (enabled) {
    return (
      <div className='addListForm'>
        <input
          className='titleInput'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Introduzca el título de la lista...'
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '5px',
          }}
        >
          <button
            className='addListButton'
            onClick={() => {
              updateDashboard(title);
              setEnabled(false);
              setTitle('');
            }}
          >
            Añadir lista
          </button>
          <button className='closeAddListButton'>
            <MdClose color='white' />
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <button className='enabledAddList' onClick={() => setEnabled(true)}>
        <IoMdAdd
          color='white'
          style={{
            fontSize: '1.5rem',
          }}
        />
        Añada otra lista
      </button>
    </>
  );
};

export default AddList;
