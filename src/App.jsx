import { Dashboard } from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import { Students } from './pages/Students'
import { StudentDetails } from './pages/StudentDetails'
import { ExcellentStudents } from "./pages/ExcellentStudents";
import { NotFound } from "./pages/NotFound";
import { SideBar } from "./components/SideBar";
import { students } from "./data/students";
import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <SideBar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/students' element={<Students students={students} />} />
          <Route path='/student/:id' element={<StudentDetails/>} />
          <Route path='/excellent' element={<ExcellentStudents />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
export default App