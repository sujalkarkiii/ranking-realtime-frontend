import { useEffect, useState } from "react";
import { emitVote, connectPollSocket } from "../connection/backend";
import { useNavigate } from "react-router-dom";

const VotingPage = () => {
  const [nominee, setNominee] = useState([]);
  const navigate = useNavigate();
  let socket = null;

  const loadingNomineesFromBackend = async () => {
    return {
      data: {
        names: [
          { key: 1, name: "Balen" },
          { key: 2, name: "Kpolo" },
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

    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/"); 
      return;
    }

    socket = connectPollSocket({ token });

    const handleUnload = () => {
      localStorage.removeItem("accessToken");
    };
    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("pagehide", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("pagehide", handleUnload);
      if (socket) socket.disconnect();
    };
  }, [navigate]);

  return (
    <div className="flex flex-col w-full justify-around items-stretch h-full mx-auto max-w-sm">
      <h1 className="text-center text-2xl my-4">Voting Page</h1>
      <div className="my-4">
        <h3 className="text-center text-lg mb-2">Nominees</h3>
        <ul className="flex flex-col gap-4 items-center">
          {nominee.map((n) => (
            <li key={n.key}>
              <button
                onClick={() => emitVote(n.name)}
                className="box btn-orange w-32"
              >
                {n.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VotingPage;
