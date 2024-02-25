import { HiPlus } from 'react-icons/hi';
import '../../../../index.css';

const AddCardButton = () => {
  return (
    <div className='addcard'>
      <HiPlus />
      <button className='addcardbutton'>Añada una tarjeta</button>
    </div>
  );
};

export default AddCardButton;
