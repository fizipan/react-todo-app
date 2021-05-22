import Task from 'elements/Task';

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.length
        ? tasks.map((task) => {
            return <Task key={task.id} task={task} onDelete={onDelete} />;
          })
        : 'Your Task Empty'}
    </>
  );
};

export default Tasks;
