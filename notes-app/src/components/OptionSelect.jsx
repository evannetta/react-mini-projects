// import { useState } from "react";

const OptionSelect = ({ name, options, onChange, defaultOption = options[0] }) => {
  return (
    <>
      <div className='flex gap-2 justify-between items-center w-full'>
        <label
          htmlFor={name}
          className='font-bold'
        >
          {name}:
        </label>
        <select
          name={name}
          type='text'
          className='w-fit p-1 border border-purple-800 rounded-lg focus:bg-purple-50 outline-purple-800 focus:border-2'
          defaultValue={defaultOption}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option
              value={option}
              key={index + name}
              className='fosus:bg-purple-100'
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
