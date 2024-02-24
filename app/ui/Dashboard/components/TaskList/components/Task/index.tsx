import type { TaskType } from '@/app/types/index';
import '../../../../index.css';

const Task: React.FC<{ taskInfo: TaskType }> = ({ taskInfo }) => {
  return <div className='task'>{taskInfo.title}</div>;
};

export default Task;
