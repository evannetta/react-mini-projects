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
      className='flex justify-between items-center bg-light-sea-green-400 rounded-3xl font-semibold shadow-sm text-center w-34 px-3 py-2 cursor-pointer hover:scale-95 transition'
      onClick={() => setFormVisibility(true)}
    >
      <img
        src='add-note.svg'
        alt='add note'
        className='md:w-3 w-4 md:h-4 h-3'
      />
      <p className='md:text-m text-sm'>Add new note</p>
    </div>
  ) : (
    <div className='absolute top-0 left-0 w-lvw h-lvh bg-ink-black-900/40 flex justify-between items-start transition duration-250 ease-out'>
      <form
        onSubmit={handleSubmit}
        className='relative top-1/2 left-1/2 -translate-1/2 p-4 w-70 min-h-50 rounded-2xl bg-white shadow-sm flex flex-col gap-4 justify-between items-start md:text-m text-sm'
      >
        <div className='w-full'>
          <label
            htmlFor='title'
            hidden={true}
          >
            Title
          </label>
          <input
            autoFocus
            name='title'
            type='text'
            placeholder='Title'
            className='w-full p-3 border rounded-2xl border-ink-black-900/20 focus:border-ink-black-900/60 outline-0 font-normal'
            value={note.title}
            onChange={handleChangeNote}
          />
        </div>
        <OptionSelect
          name={'Priority'}
          options={['High', 'Medium', 'Low']}
          value={note.priority}
          onChange={handleChangeNote}
          defaultOption={'Priority'}
        />
        <OptionSelect
          name={'Category'}
          options={['Work', 'Personal', 'Ideas']}
          value={note.category}
          onChange={handleChangeNote}
          defaultOption={'Category'}
        />
        <div className='w-full'>
          <label
            htmlFor='description'
            hidden={true}
          >
            Description
          </label>
          <textarea
            name='description'
            type='text'
            placeholder='Description'
            className='w-full h-30 p-3 border rounded-2xl border-ink-black-900/20 focus:border-ink-black-900/60 outline-0 font-normal '
            value={note.description}
            onChange={handleChangeNote}
          ></textarea>
        </div>{' '}
        <button
          type='submit'
          className={`w-full py-2 shadow-sm font-semibold ${isCancelHovered ? 'bg-white' : 'bg-light-sea-green-400'} rounded-3xl cursor-pointer transition`}
        >
          Add note
        </button>
        <button
          className='w-full py-2 bg-white shadow-sm font-semibold rounded-3xl cursor-pointer hover:bg-light-sea-green-400 transition'
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
