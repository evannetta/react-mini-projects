const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0)
    return (
      <>
        <p className='text-center text-gray-500'>No notes yet</p>
      </>
    );
  return (
    <div className='grid grid-cols-2 md:grid-cols-6 '>
      {notes.map((note) => (
        <div
          key={note.id}
          className={`p-2 mb-8 bg-white rounded-lg shadow-md border-l-4 w-50 min-h-50 cursor-pointer flex flex-col justify-around border-${note.color}`}
        >
          <h3 className='text-lg font-bold'>{note.title}</h3>

          <p className='m-2 min-h-20'>{note.description}</p>
          <p className='text-sm text-gray-600'>
            <strong>Category: </strong>
            {note.category}
          </p>
          <p className='text-sm text-gray-600'>
            <strong>Priority: </strong>
            {note.priority}
          </p>
          <div
            className='mt-3 cursor-pointer'
            onClick={() => deleteNote(note.id)}
          >
            <img
              src='../../public/del-note.svg'
              alt='delete note'
              className='w-6 h-6 justify-self-end'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
