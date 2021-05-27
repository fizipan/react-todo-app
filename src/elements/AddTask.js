import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState();
  const [day, setDay] = useState();
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('please add task!');
      return;
    } else if (!day) {
      alert('please add day!');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input type="text" id="task" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add Task" autoComplete="off" autoFocus />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input type="text" id="day" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Add Day & Time" autoComplete="off" />
        </div>
        <div className="form-control-check">
          <label htmlFor="reminder">Set Reminder</label>
          <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} id="reminder" />
        </div>

        <button className="btn-submit btn-block" type="submit">
          Save Task
        </button>
      </form>
    </>
  );
};

export default AddTask;
