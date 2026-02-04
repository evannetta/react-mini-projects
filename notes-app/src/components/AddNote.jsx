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
    color: 'yellow-300',
  });

  const handleChangeNote = (e) => {
    if (e.target.name.toLowerCase() === 'priority') {
      setNote({
        ...note,
        [e.target.name.toLowerCase()]: e.target.value,
        color: e.target.value == 'High' ? 'red-600' : e.target.value == 'Medium' ? 'yellow-300' : 'emerald-700',
      });
    } else {
      setNote({
        ...note,
        [e.target.name.toLowerCase()]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, { id: Date.now(), ...note }]);

    setNote({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
      color: 'yellow-300',
    });
    setFormVisibility(false);
  };

  const handleAddNote = () => {
    setFormVisibility(true);
  };

  const handleCancel = () => {
    setFormVisibility(false);
    setButtonsHover(false);
  };

  return !isFormvisible ? (
    <div
      className='flex justify-center items-center flex-col rounded-lg border-dashed border-2 text-purple-800 bg-white w-50 min-h-50 cursor-pointer'
      onClick={handleAddNote}
    >
      <img
        src='../../public/add-note.svg'
        alt='add note'
        className='w-10 h-10'
      />
      <p className='font-bold text-lg'>Add new note</p>
    </div>
  ) : (
    <div className='p-4 flex justify-between items-start text-purple-800 bg-white w-60 min-h-50  rounded-lg border-2 border-dashed transition'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 justify-between items-start w-full'
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
            className='w-full p-2 border rounded-lg'
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
            className='w-full p-2 border rounded-lg'
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
