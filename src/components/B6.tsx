import axios from 'axios';

const API_URL = 'http://localhost:3000/students';

export interface Student {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
    status: boolean;
    created_at: string;
}

export const getAllStudent = async (): Promise<Student[]> => {
    try {
        const response = await axios.get<Student[]>(API_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error);
        return [];
    }
};

export const getStudentById = async (id: number): Promise<void> => {
    try {
        const response = await axios.get<Student>(`${API_URL}/${id}`);
        console.log(response.data);
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            console.log('Không tìm thấy bản ghi');
        } else {
            console.error('Error fetching student by id:', error);
        }
    }
};

export const removeById = async (id: number): Promise<void> => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        console.log('Deleted:', response.data);
    } catch (error) {
        console.error('Error deleting student:', error);
    }
};

export const createStudent = async (student: Omit<Student, 'id'>): Promise<void> => {
    try {
        const response = await axios.post<Student>(API_URL, student);
        console.log('Created:', response.data);
    } catch (error) {
        console.error('Error creating student:', error);
    }
};

export const updateStudentById = async (id: number, student: Partial<Student>): Promise<void> => {
    try {
        const response = await axios.put<Student>(`${API_URL}/${id}`, student);
        console.log('Updated:', response.data);
    } catch (error) {
        console.error('Error updating student:', error);
    }
};
