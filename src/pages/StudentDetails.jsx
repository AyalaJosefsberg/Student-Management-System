import { useParams, Link } from 'react-router-dom'
import { students } from '../data/students'

export function StudentDetails() {
  const { id } = useParams()
  const student = students.find(s => String(s.id) === id)

  if (!student) {
    return <h2>התלמידה לא נמצאה</h2>
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{student.name}</h1>
      <p>ת.ז: {student.id}</p>
      <p>ציון: {student.grade}</p>
      <p style={{
  color: student.active ? '#16a34a' : '#dc2626',
  fontWeight: 'bold',
}}>
  {student.active ? '● פעילה' : '● לא פעילה'}
</p>
      <Link to="/students">חזרה לרשימה</Link>
    </div>
  )
}