import { useState } from "react"
import { senddata } from "../../connection/backendconnection"
import { useLocation } from "react-router-dom"

const Addingpeople = () => {
  const [person1, setPerson1] = useState("")
  const [person2, setPerson2] = useState("")
  const [person3, setPerson3] = useState("")
  
  const location = useLocation()
  const poll = location.state?.poll

  const handleSubmit = async (e) => {
    e.preventDefault()
    const people = [person1, person2, person3]
    await senddata(poll.id, people)
  }

  return (
    <div className="p-6">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <input
              type="text"
              value={person1}
              onChange={(e) => setPerson1(e.target.value)}
              placeholder="Nominee 1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />

            <input
              type="text"
              value={person2}
              onChange={(e) => setPerson2(e.target.value)}
              placeholder="Nominee 2"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />

            <input
              type="text"
              value={person3}
              onChange={(e) => setPerson3(e.target.value)}
              placeholder="Nominee 3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        <p>
          Pollid={poll.id}
        </p>
      </div>
    </div>
  )
}

export default Addingpeople