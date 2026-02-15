const OptionSelect = ({ name, options, onChange, defaultOption = options[0] }) => {
  return (
    <>
      <div className='flex gap-2 justify-between items-center w-full text-sm sm:text-base'>
        <label
          htmlFor={name}
          className='font-semibold '
          hidden='true'
        ></label>
        <select
          name={name}
          type='text'
          className='w-full min-w-26 px-2 py-1 p-3 bg-porcelain-500/5 border rounded-2xl border-ink-black-900/20 focus:border-ink-black-900/60 outline-0'
          defaultValue={defaultOption}
          onChange={onChange}
        >
          <option
            value=''
            hidden={true}
          >
            {defaultOption}
          </option>
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
