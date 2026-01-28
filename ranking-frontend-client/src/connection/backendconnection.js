import axios from "axios";

export const joinfunction = async (pollID, name) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/polls/join",
      {
        pollID,
        name,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Join failed", error);
    throw error;
  }
};


export const loadingNomineesFromBackend=await axios.get(
  //  data: {
  //     names: ['Balen', 'Kpolo']}
)