import { useState } from "react"
import { senddata } from "../../connection/backendconnection"

const Addingpeople = () => {
  const [people, setpeople] = useState([''])

  const onclickadd = async (e) => {
        await senddata(people)
          
  }

  const Addpeople = async (e) => {
    e.preventDefault()
    setpeople([...people, ""])
  }

  const removePerson = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index)
    setpeople(updatedPeople)
  }

  const handleChange = (index, value) => {
    const updatedPeople = [...people]
    updatedPeople[index] = value
    setpeople(updatedPeople)
  }

  return (
    <div className="p-6">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-4">
        <form>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Nominee
          </label>

          <div className="space-y-2">
            {people.map((person, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={person}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {people.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePerson(index)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    −
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={Addpeople}
              className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              +
            </button>

            <button
              onClick={onclickadd}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      <p className="text-center mt-4 text-sm text-gray-500">
        this is addingpepeople
      </p>
    </div>
  )
}

export default Addingpeople
