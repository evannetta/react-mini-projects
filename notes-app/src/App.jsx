import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import { useState, useEffect } from 'react';
import OptionSelect from './components/OptionSelect';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [];
  });
  const [filter, setFilter] = useState('All notes');
  const [sortBy, setSort] = useState('Date');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const filteredNotes = notes
    .filter((note) => {
      if (filter === 'All notes') return true;
      else return note.category === filter;
    })
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case 'Title':
          return a.title < b.title ? -1 : 1;
        case 'Data':
          return a.id - b.id;
        case 'Priority':
          if (a.priority === 'High' || b.priority === 'Low') return -1;
          if (a.priority === 'Low' || b.priority === 'High') return 1;
      }
    });

  return (
    <div className='min-w-sm'>
      <nav className='sticky top-0 left-0 w-full px-2 md:px-4 md:py-4 pb-8 pt-4 mb-10 bg-white text-gray-900  shadow-md  flex md:flex-row flex-col gap-4 justify-between md:items-center items-stretch z-50'>
        <h2 className='text-lg font-semibold'>
          Hi, here are your <span className=' text-blue-900 font-bold'>Notes</span>
        </h2>
        <div className='flex items-center md:gap-2 gap-5'>
          <OptionSelect
            name={'Category'}
            options={['All notes', 'Work', 'Personal', 'Ideas']}
            onChange={(e) => setFilter(e.target.value)}
          />
          <OptionSelect
            name={'Sort'}
            options={['Date', 'Title', 'Priority']}
            onChange={(e) => setSort(e.target.value)}
          />
        </div>
        <AddNote
          notes={notes}
          setNotes={setNotes}
        />
      </nav>
      <NoteList
        notes={filteredNotes}
        deleteNote={(id) => setNotes(notes.filter((note) => note.id != id))}
      />
    </div>
  );
};

export default App;
