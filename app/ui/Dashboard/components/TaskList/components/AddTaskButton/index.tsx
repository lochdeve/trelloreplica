import { HiPlus } from 'react-icons/hi';
import '../../../../index.css';

const AddTaskButton = () => {
  return (
    <div className='addtask'>
      <HiPlus />
      <button className='addtaskbutton'>Añada una tarjeta</button>
    </div>
  );
};

export default AddTaskButton;
