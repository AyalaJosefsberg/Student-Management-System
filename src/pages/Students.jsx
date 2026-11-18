import { StudentCard } from '../components/StudentCard';
import { Header } from '../components/Header';
export function Students({ students }) {
    return (
        <div>
            <Header title="רשימת תלמידות" />
            <div className="grid-container">
                {students?.map(student => (
                    <StudentCard 
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        grade={student.grade}
                        attendance={student.attendance}
                        active={student.active}
                    />
                ))}
            </div>
        </div>
    );
}