import { useState } from 'react';
import OptionSelect from './OptionSelect';

const AddNote = ({ notes, setNotes }) => {
  const [isFormvisible, setFormVisibility] = useState(false);
  const [isCancelHovered, setButtonsHover] = useState(false);

  const [note, setNote] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const handleChangeNote = (e) => {
    setNote({
      ...note,
      [e.target.name.toLowerCase()]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([{ id: Date.now(), ...note }, ...notes]);
    setNote({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
    setFormVisibility(false);
  };

  const handleCancel = () => {
    setFormVisibility(false);
    setButtonsHover(false);
    setNote({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };

  return !isFormvisible ? (
    <div
      className='absolute top-full left-1/2 -translate-x-1/2 -translate-y-5 flex justify-center items-center bg-white rounded-lg border-2 border-purple-800 shadow-sm text-center text-bold w-fit px-3 py-2 cursor-pointer hover:scale-95 transition'
      onClick={() => setFormVisibility(true)}
    >
      <img
        src='../../public/add-note.svg'
        alt='add note'
        className='md:w-8 w-6 md:h-8 h-6 '
      />
      <p className='md:text-m text-sm'>Add new note</p>
    </div>
  ) : (
    <div className='absolute top-full left-1/2 -translate-x-1/2 -translate-y-6 p-4 flex justify-between items-start text-purple-800 bg-white w-70 min-h-50 rounded-lg border-2 shadow-lg transition duration-250 ease-out z-10'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 justify-between items-start w-full md:text-m text-sm'
      >
        <div className='w-full'>
          <label
            htmlFor='title'
            className='block font-semibold'
          >
            Title
          </label>
          <input
            name='title'
            type='text'
            className='w-full p-2 border border-purple-800 rounded-lg outline-purple-800 text-gray-800'
            value={note.title}
            onChange={handleChangeNote}
          />
        </div>
        <OptionSelect
          name={'Priority'}
          options={['High', 'Medium', 'Low']}
          value={note.priority}
          onChange={handleChangeNote}
          defaultOption={'Medium'}
        />
        <OptionSelect
          name={'Category'}
          options={['Work', 'Personal', 'Ideas']}
          value={note.category}
          onChange={handleChangeNote}
          defaultOption={'Work'}
        />
        <div className='w-full'>
          <label
            htmlFor='description'
            className='block font-semibold'
          >
            Description
          </label>
          <textarea
            name='description'
            type='text'
            className='w-full h-30 p-2 border border-purple-800 rounded-lg outline-purple-800 text-gray-800'
            value={note.description}
            onChange={handleChangeNote}
          ></textarea>
        </div>{' '}
        <button
          className={`w-full py-2 ${isCancelHovered ? 'bg-white text-purple-800 border border-purple-800' : 'bg-purple-600 text-white'} rounded-lg cursor-pointer hover:bg-purple-800 hover:text-white transition`}
        >
          Add note
        </button>
        <button
          className='w-full py-2 bg-white text-purple-800 border border-purple-800 rounded-lg cursor-pointer hover:bg-purple-800 hover:text-white'
          onClick={handleCancel}
          onMouseEnter={() => setButtonsHover(true)}
          onMouseLeave={() => setButtonsHover(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddNote;
