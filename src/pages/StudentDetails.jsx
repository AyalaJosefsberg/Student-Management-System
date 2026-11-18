import { useParams, Link } from 'react-router-dom';
import { students } from "../data/students";

export function StudentDetails() {
    const { id } = useParams();
    const student = students.find(s => String(s.id) === String(id));

    if (!student) {
        return (
            <div>
                <h1>התלמידה לא נמצאה</h1>
                <Link to="/students" className="btn-primary">חזרה לרשימת התלמידות</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>פרטי תלמידה</h1>
            <div className="card" style={{ maxWidth: '600px' }}>
                <h2 style={{ marginTop: 0, color: '#4f46e5' }}>{student.name}</h2>
                <p><strong>מספר זיהוי:</strong> {student.id}</p>
                <p><strong>ציון סופי:</strong> {student.grade}</p>
                <p><strong>סטטוס פעילות:</strong> {student.active ? "פעילה במערכת" : "לא פעילה"}</p>
                
                <div style={{ marginTop: '24px' }}>
                    <Link to="/students" className="btn-primary" style={{ backgroundColor: '#64748b' }}>
                        חזרה לרשימה
                    </Link>
                </div>
            </div>
        </div>
    );
}