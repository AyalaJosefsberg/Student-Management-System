import { Students } from "./Students";
import { students } from "../data/students";
export function ExcellentStudents() {
    return (
        <>  
            <h1>תלמידות מצטיינות</h1>
            <Students students={students.filter(student => student.grade > 90)} />
        </>
    )
}