const OptionSelect = ({ name, options, onChange, defaultOption = options[0] }) => {
  return (
    <>
      <div className='flex gap-2 justify-between items-center w-full text-sm sm:text-base'>
        <label
          htmlFor={name}
          className='font-semibold '
        >
          {name}:
        </label>
        <select
          name={name}
          type='text'
          className='w-full min-w-24 px-2 py-1 text-sm border border-gray-400 rounded-lg outline-blue-900 focus:border-blue-900 focus:bg-gray-50'
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
