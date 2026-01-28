import Join_page from "./Pages/Join_page"
import { Route,Routes } from "react-router-dom"
import Votin_page from "./Pages/Votin_page"


const App = () => {
  return (
    <div>
      <Routes>
           <Route path="/" element={<Join_page/>} />
           <Route path="/vote" element={<Votin_page/>} />
      </Routes>
      
    </div>
  )
}

export default App
