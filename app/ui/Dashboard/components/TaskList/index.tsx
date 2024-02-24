import type { TaskType } from '@/app/types/index';
import { useState } from 'react';
import { GoProjectTemplate } from 'react-icons/go';
import '../../index.css';
import AddTaskButton from './components/AddTaskButton';
import Task from './components/Task';

const TaskList = (taskListInfo: { name: string }) => {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      title: 'Task 1',
      description: 'This is task 1',
      done: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'This is task 2',
      done: false,
    },
  ]);

  return (
    <div className='tasklist'>
      <span
        style={{
          fontSize: '15px',
          marginLeft: '10px',
          color: '##b7c2ce',
          fontWeight: 'bold',
          padding: '5px 0 5px 0',
        }}
      >
        {taskListInfo.name}
      </span>
      {tasks.map((task) => {
        return <Task key={task.id} taskInfo={task} />;
      })}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <AddTaskButton />
        <div className='createtemplate'>
          <button className='templatebutton'>
            <GoProjectTemplate />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
