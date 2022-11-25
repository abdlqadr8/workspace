export const TextField = ({ title, type, name }) => {
  return (
    <div style={{ margin: '10px' }}>
      <label for={name}>{title}: </label>
      <input type={type} name={name} id={name} value="" />
    </div>
  );
};

const options = [
  {
    label: 'car',
    value: 'car',
  },
  {
    label: 'bike',
    value: 'bike',
  },
];

export const SelectField = () => {
  return (
    <div>
      <select id='vehicle'>
        {options.map((option) => 
          <option key={option} value={option.value}>
            {option.label}
          </option>
        )}
      </select>
    </div>
  );
};

export const Select = () => {
  return (
    <div>
      <select>
        <option>one</option>
        <option>two</option>
      </select>
    </div>
  );
};
