import React, { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = event => setTask(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault()
    if (task.trim()) {
      setList([...list, task]);
      setTask('');
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          data-testid="form-field"
          onChange={handleInputChange}
          placeholder="Type a new task here"
          type="text"
          value={task}
        />
        <button
          data-testid="form-btn"
          type="submit">Add new task</button>
      </form>
      <table  data-testid="table">
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {list.map((itemList, index) => (
            <tr key={index}>
              <th>{itemList}</th>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  )
}

export default Todo;
