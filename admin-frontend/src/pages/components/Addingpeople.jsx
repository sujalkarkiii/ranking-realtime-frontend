import { useState } from "react";

const Addingpeople = () => {
  const [people, setPeople] = useState([""]);
  
  const addInput = () => {
    setPeople([...people, ""])}

  const removeInput = (index) => {
    setPeople(people.filter((_, i) => i !== index))}

  const handleChange = (index, value) => {
    const updated = [...people]
    updated[index] = value
    setPeople(updated)}

  return (
    <div className="flex flex-col gap-3 max-w-sm">

{/* add people */}
      {people.map((person, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            value={person}
            placeholder={`Person ${index + 1}`}
            onChange={(e) => handleChange(index, e.target.value)}
            className="border px-2 py-1 rounded w-full"
          />


{/* delete pepoples  */}
          {people.length > 1 && (
            <button
              type="button"
              onClick={() => removeInput(index)}
              className="px-2 border rounded"
            >
              -
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addInput}
        className="border px-3 py-1 rounded w-fit"
      >
        + Add Person
      </button>
    </div>
  );
};

export default Addingpeople;
