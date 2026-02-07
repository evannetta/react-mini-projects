const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0)
    return (
      <>
        <p className='text-center text-gray-700'>No notes yet</p>
      </>
    );
  return (
    <div className='flex flex-wrap justify-center items-start'>
      {notes.map((note) => (
        <div
          key={note.id}
          className={`relative bg-white text-gray-700 shadow-md sm:m-2 mb-2 mx-2 p-2 sm:w-70 w-full cursor-pointer flex flex-col justify-around border-2 rounded-lg ${note.priority == 'High' ? 'border-red-500' : note.priority == 'Medium' ? 'border-yellow-500' : 'border-green-500'} hover:scale-105 transition`}
        >
          <h3 className='mb-2 overflow-clip max-h-14 text-md font-bold'>{note.title}</h3>
          <p className='mb-2 overflow-y-auto text-sm'>{note.description}</p>
          <p className='text-xs'>
            <strong>Category: </strong>
            {note.category}
          </p>
          <p className='text-xs'>
            <strong>Priority: </strong>
            {note.priority}
          </p>
          <div
            className='absolute bottom-0 right-0 m-2 cursor-pointer hover:scale-95 transition'
            onClick={() => deleteNote(note.id)}
          >
            <img
              src='../../public/del-note.svg'
              alt='delete note'
              className='w-5 h-5 justify-self-end '
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
