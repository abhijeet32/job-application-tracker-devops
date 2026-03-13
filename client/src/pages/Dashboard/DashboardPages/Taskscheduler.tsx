import React, { useState } from 'react';

export default function Taskscheduler() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Update Resume', completed: false },
    { id: 2, text: 'Apply to Google', completed: true },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Task Scheduler</h1>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <p className="text-gray-600 mb-6">Manage your job application tasks and deadlines.</p>

        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customColor focus:border-transparent transition"
          />
          <button
            onClick={addTask}
            className="px-6 py-3 bg-customColor text-white font-medium rounded-lg hover:bg-opacity-90 transition shadow-md"
          >
            Add Task
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map(task => (
            <div key={task.id} className={`flex items-center justify-between p-4 rounded-lg border ${task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 shadow-sm'} transition`}>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 text-customColor rounded border-gray-300 focus:ring-customColor cursor-pointer"
                />
                <span className={`text-lg ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                  {task.text}
                </span>
              </div>
              <button onClick={() => removeTask(task.id)} className="text-red-400 hover:text-red-600 font-medium text-sm">
                Delete
              </button>
            </div>
          ))}
          {tasks.length === 0 && <p className="text-gray-500 italic text-center py-4">No tasks scheduled.</p>}
        </div>
      </div>
    </div>
  )
}
