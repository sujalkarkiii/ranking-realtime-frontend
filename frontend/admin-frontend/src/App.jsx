import { Route,Routes } from "react-router-dom"
import Join_page from "./pages/Join_page"
import Votein_page from "./pages/Votein_page"

const App = () => {
  return (
    <div>
            <Routes>
           <Route path="/" element={<Join_page/>} />
           <Route path="/create" element={<Votein_page/>} />
      </Routes>
    </div>
  )
}

export default App
