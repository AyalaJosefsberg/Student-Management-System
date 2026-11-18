export function Statistics({students}){
    const totalStudents=students.length;
    const totalactiveStudents=students.filter(s=>s.active==true).length
    const avgGrades=students.reduce((sum,s)=>sum+s.grade,0)/totalStudents
    return<>
    <p>ישנם {totalStudents} תלמידות </p>
    <p>ישנם {totalactiveStudents}  תלמידות אקטיביות</p>
    <p>ממוצע הציונים: {avgGrades}</p>
    </>
}