const OptionSelect = ({ name, options, onChange, defaultOption = options[0] }) => {
  return (
    <>
      <div className='flex gap-2 justify-between items-center w-full text-sm sm:text-m'>
        <label
          htmlFor={name}
          className='font-bold '
        >
          {name}:
        </label>
        <select
          name={name}
          type='text'
          className='w-full min-w-24 px-2 py-1 border border-purple-800 rounded-lg focus:bg-purple-50 outline-purple-800 focus:border-2'
          defaultValue={defaultOption}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option
              value={option}
              key={index + name}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default OptionSelect;
