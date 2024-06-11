import axios from "axios";
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

export default function ReactComponent() { 
    const [users, setUsers] = useState<User[]>([]); 

    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then(response => { 
                console.log("giá trị trả về", response);
                setUsers(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            React
            <p>Danh sách user ở trong bảng users</p>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
