export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <p> Find contact by name</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
