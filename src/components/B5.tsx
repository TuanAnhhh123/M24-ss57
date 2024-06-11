import React, { useEffect, useState } from 'react';
import { getAllStudent, getStudentById, removeById, createStudent, Student } from '../services/api';

const StudentList: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [newStudent, setNewStudent] = useState<Omit<Student, 'id'>>({
        student_name: '',
        email: '',
        address: '',
        phone: '',
        status: true,
        created_at: new Date().toISOString()
    });

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
        // Update the list after removing a student
        const data = await getAllStudent();
        setStudents(data);
    };

    const handleCreateStudent = async () => {
        await createStudent(newStudent);
        // Update the list after creating a new student
        const data = await getAllStudent();
        setStudents(data);
        // Reset form
        setNewStudent({
            student_name: '',
            email: '',
            address: '',
            phone: '',
            status: true,
            created_at: new Date().toISOString()
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value
        });
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
            <h2>Create New Student</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleCreateStudent(); }}>
                <input
                    type="text"
                    name="student_name"
                    value={newStudent.student_name}
                    onChange={handleInputChange}
                    placeholder="Student Name"
                />
                <input
                    type="email"
                    name="email"
                    value={newStudent.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="address"
                    value={newStudent.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                />
                <input
                    type="text"
                    name="phone"
                    value={newStudent.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                />
                <button type="submit">Create Student</button>
            </form>
        </div>
    );
};

export default StudentList;
