import { useState } from 'react';

const TaskInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-6 flex gap-2">
      <input
        type="text"
        placeholder="NEW MISSION..."
        className="flex-1 px-4 py-2 rounded bg-retro-cream text-retro-dark border-2 border-retro-dark focus:outline-none focus:border-retro-blue focus:shadow-retro-sm font-bold placeholder-gray-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-retro-blue hover:bg-blue-600 text-white rounded border-2 border-retro-dark font-bold transition shadow-retro-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px] uppercase tracking-wide"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
