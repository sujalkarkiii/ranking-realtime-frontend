import React, { useRef, useState } from 'react';
import { joinfunction } from '../connection/backendconnection';
import { connectPollSocket } from '../connection/backend';
import { useNavigate } from 'react-router-dom';



const Join_page = () => {
  const navigate = useNavigate();
  const nameRef = useRef(null)
  const pollIDRef = useRef(null)



  const handleSubmit = async(e) => {
      e.preventDefault()
    console.log(pollIDRef.current.value, nameRef.current.value)
      const { accessToken, userId, poll } = await joinfunction(pollIDRef.current.value, nameRef.current.value);
      localStorage.setItem("accessToken", accessToken);
      connectPollSocket(accessToken)
         navigate("/vote")
  }



  
  return (
    <div className="flex flex-col w-full justify-around items-stretch h-full mx-auto max-w-sm p-4">

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Poll ID */}
        <div className="div-pollid">
          <label className="block mb-1">Poll ID</label>
          <input
            type="text"
            ref={pollIDRef}
            placeholder="Enter Poll ID"
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

        {/* Submit button */}
        <button
          type="submit"
          className="box btn-orange w-32 my-2 mx-auto"
        >
          Join Poll
        </button>

      </form>







    </div>


  );
};

export default Join_page;
