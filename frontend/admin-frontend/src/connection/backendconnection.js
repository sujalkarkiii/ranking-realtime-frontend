import axios from 'axios'

export const joinadminfunction = async (topicref, nameRef, votespervoter) => {
    try {
        const response = await axios.post("http://localhost:3000/polls",
            {
                topic:topicref,
                name:nameRef, 
                votesPerVoter:votespervoter
            })
        return response.data
    } catch (error) {
        console.error("Join failed", error);
        throw error;
    }
}

export const senddata=async(people)=>{
    try {
        
        const  response=await axios.post("http://localhost:3000/polls/add",{ nominees: people})
        return response.data

    } catch (error) {
                console.error("Join failed", error);
        throw error;
    }
}