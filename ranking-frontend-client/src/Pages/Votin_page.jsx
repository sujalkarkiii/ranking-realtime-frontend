import { useEffect, useState } from "react"
import { emitVote } from "../connection/backend"

const Votin_page = () => {
 const [nominee, setNominee] = useState([])



const loadingNomineesFromBackend = async () => {
  return {
    data: {
      names: [
        { key: 1, name: 'Balen' },
        { key: 2, name: 'Kpolo' },
      ],
    },
  };
};


    useEffect(() => {
        const funcloadnominee = async () => {
            try {
                const loadNominee = await loadingNomineesFromBackend();
                setNominee(loadNominee.data.names);
            } catch (err) {
                console.error("Failed to load nominees", err);
            }
        };

        funcloadnominee();
    }, [])







    return (
        <div>

            <h1>voting page</h1>


            <div>
                <h3>Nominees</h3>
                <ul>
                    {nominee.map((n) => (
                        <li key={n.name}>
                            <button onClick={() => emitVote(n.name)}>{n.name}</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Votin_page
