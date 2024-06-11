import React, { useEffect, useState } from 'react';
import { getAllStudent, getStudentById, removeById, Student } from '../services/api';

const StudentList: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllStudent();
            setStudents(data);
        };

        fetchData();
    }, []);

    const handleGetStudentById = async (id: number) => {
        await getStudentById(id);
    };

    const handleRemoveById = async (id: number) => {
        await removeById(id);
        
        const data = await getAllStudent();
        setStudents(data);
    };

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.student_name} - {student.email}
                        <button onClick={() => handleGetStudentById(student.id)}>Get Details</button>
                        <button onClick={() => handleRemoveById(student.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
