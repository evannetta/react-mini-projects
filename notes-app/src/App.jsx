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
    <div className='min-w-xs text-ink-black-900'>
      <nav className='sticky top-0 left-0 w-full p-4 mb-5 shadow-md flex flex-row justify-between items-center z-50'>
        <div className='flex md:flex-row flex-col justify-between md:justify-between w-1/2 gap-4 items-start md:items-center'>
          <h1 className='text-lg font-semibold'>
            Hi, here are your <span className='text-light-sea-green-800 font-bold'>Notes</span>
          </h1>
          <AddNote
            notes={notes}
            setNotes={setNotes}
          />
        </div>
        <div className='flex md:flex-row flex-col justify-between gap-4'>
          <OptionSelect
            name={'Category'}
            options={['All notes', 'Work', 'Personal', 'Ideas']}
            onChange={(e) => setFilter(e.target.value)}
            defaultOption={'Category'}
          />
          <OptionSelect
            name={'Sort'}
            options={['Date', 'Title', 'Priority']}
            onChange={(e) => setSort(e.target.value)}
            defaultOption={'Sort by'}
          />
        </div>
      </nav>
      <NoteList
        notes={filteredNotes}
        deleteNote={(id) => setNotes(notes.filter((note) => note.id != id))}
      />
    </div>
  );
};

export default App;
