import { useRef } from "react"
import { joinadminfunction } from "../connection/backendconnection"
import { useNavigate } from 'react-router-dom';

const Join_page = () => {
  
  const topicref = useRef(null)
  const nameRef = useRef(null)
  const votespervoter = useRef()
  const navigate = useNavigate();
  
  
  const handleSubmit = async(e) => {
      e.preventDefault()
    console.log(topicref.current.value, nameRef.current.value,votespervoter.current.value)


      const { accessToken} = await joinadminfunction(topicref.current.value, nameRef.current.value,Number(votespervoter.current.value));
      localStorage.setItem("accessToken", accessToken);
    //   connectPollSocket({token:accessToken})
         navigate("/create")
  }


  return (
  <div className="flex flex-col w-full justify-around items-stretch h-full mx-auto max-w-sm p-4">

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">


        {/* topic */}
        <div className="div-tpoic">
          <label className="block mb-1">Topic</label>
          <input
            type="text"
            ref={topicref}
            placeholder="Enter your topic to votefor"
            className="box info w-full px-2 py-1 border rounded"
          />
        </div>

        {/* Name */}
        <div className="div-name">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
            className="box info w-full px-2 py-1 border rounded"
            />
            </div>


        {/*  votesoervoter */}
        <div className="div-pollid">
          <label className="block mb-1">Max number of People_can vote</label>
          <input
            type="text"
            ref={votespervoter}
            placeholder="Enter No.of people can vote"
            className="box info w-full px-2 py-1 border rounded"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="box btn-orange w-32 my-2 mx-auto"
        >
          Join Poll
        </button>

      </form>

    </div>

  )
}

export default Join_page
