import { StudentCard } from '../components/StudentCard';
export function Students({ students }) {
    return (
        <div>
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