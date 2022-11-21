const PersonForm = ({ addNum, nName, nNumber, hdNmCg, hdNbCg }) => {
  return (
    <form onSubmit={addNum}>
      <div>
        name: <input value={nName} onChange={hdNmCg} />
      </div>
      <div>
        number: <input value={nNumber} onChange={hdNbCg} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
