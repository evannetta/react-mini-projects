const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0)
    return (
      <>
        <p className='text-center text-ink-black-900/50'>No notes yet</p>
      </>
    );
  return (
    <div className='flex flex-wrap justify-center items-start'>
      {notes.map((note) => (
        <div
          key={note.id}
          className={`relative shadow-md sm:m-2 mb-2 mx-2 p-2 sm:w-70 w-full cursor-pointer flex flex-col justify-around rounded-2xl ${note.priority == 'High' ? 'bg-punch-red-400/50' : note.priority == 'Medium' ? 'bg-amber-glow-400/50' : 'bg-light-sea-green-400/50'} hover:scale-102 transition`}
        >
          <h3 className='mb-2 overflow-clip max-h-14 text-md font-bold'>{note.title}</h3>
          <p className='mb-2 overflow-y-auto text-sm'>{note.description}</p>
          <div className='flex justify-start gap-4 items-center font-semibold bold'>
            <p className='text-xs '>{note.category}</p>
            <p
              className={`text-xs ${note.priority == 'High' ? 'text-punch-red-700' : note.priority == 'Medium' ? 'text-amber-glow-700' : 'text-light-sea-green-700'}`}
            >
              {note.priority}
            </p>
            <div
              className='absolute bottom-0 right-0 m-2 cursor-pointer hover:scale-95 transition'
              onClick={() => deleteNote(note.id)}
            >
              <img
                src='del-note.svg'
                alt='delete note'
                className='w-3 h-3 justify-self-end '
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
