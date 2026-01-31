import axios from 'axios'

export const joinadminfunction = async (topicref, nameRef, votespervoter) => {
    try {
        const response = await axios.post("http://localhost:3000/polls",
            {
                topic: topicref,
                name: nameRef,
                votesPerVoter: votespervoter
            })
        return response.data
    } catch (error) {
        console.error("Join failed", error);
        throw error;
    }
}

export const senddata = async (poll, people) => {
    try {
        console.log(poll, people)
        const response = await axios.post("http://localhost:3000/polls/add", {
            name: people,
            pollId: poll
        })
        return response.data

    } catch (error) {
        console.error("Join failed", error);
        throw error;
    }
}