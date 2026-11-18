import { Dashboard } from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import { Students } from './pages/Students'
import { ExcellentStudents } from "./pages/ExcellentStudents";
import { NotFound } from "./pages/NotFound";
import { SideBar } from "./components/SideBar";
import { students } from "./data/students";
import { Home } from "./pages/Home";
import { StudentDetails } from "./pages/StudentDetails";
import { Users } from './pages/Users'
import './App.css'

function App() {
  return (
<div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
  <SideBar />
  <main style={{ flex: 1, minWidth: 0, padding: '20px', boxSizing: 'border-box' }}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/students' element={<Students students={students} />} />
      <Route path='/excellent' element={<ExcellentStudents />} />
        <Route path='/student/:id' element={<StudentDetails />} />
        <Route path='/users' element={<Users />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </main>
</div>
)}
export default App