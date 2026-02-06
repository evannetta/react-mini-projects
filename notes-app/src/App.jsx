import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import { useState } from 'react';
import OptionSelect from './components/OptionSelect';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('All notes');
  const [sortBy, setSort] = useState('Date');

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
      }
    });

  return (
    <div className='min-w-sm'>
      <nav className='relative w-full px-2 md:px-4 md:py-4 pb-8 pt-4 mb-10 bg-white shadow-md text-purple-800 flex md:flex-row flex-col gap-4 justify-between items-center'>
        <h2 className='text-m md:text-lg font-bold'>Hi, here are your notes</h2>

        <div className='flex  items-center md:gap-2 gap-5'>
          <OptionSelect
            name={'Category'}
            options={['All notes', 'Work', 'Personal', 'Ideas']}
            onChange={(e) => setFilter(e.target.value)}
          />
          <OptionSelect
            name={'Sort'}
            options={['Date', 'Title']}
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
