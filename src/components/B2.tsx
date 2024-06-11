import React, { useEffect, useState } from 'react';
import { getAllStudent, Student } from 'react';

const StudentList: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllStudent();
            setStudents(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.student_name} - {student.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
