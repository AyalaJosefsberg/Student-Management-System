import { Students } from "./Students";
import { students } from "../data/students";
import { Header } from '../components/Header';
export function ExcellentStudents() {
    return (
        <>  
            <Header title="תלמידות מצטיינות" />
            <Students students={students.filter(student => student.grade > 90)} />
        </>
    )
}