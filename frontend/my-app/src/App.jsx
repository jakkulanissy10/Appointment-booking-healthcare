import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DoctorList from "./Components/DoctorList/index.jsx"
import DoctorDetail from "./Components/DoctorDetail/index.jsx"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorList />} />
        <Route path="/doctors/:id" element={<DoctorDetail />} />
      </Routes>
    </Router>
  )
}

export default App

