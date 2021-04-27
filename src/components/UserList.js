import React, { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import UserCard from './UserCard';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [iseLoding, setIseLoding] = useState(true);
    useEffect(() => {
        const fetchUsers = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => res.json())
                .then((data) => setUsers(data))
                .catch((err) => console.error(err));
        };
        fetchUsers();
        setIseLoding(false);
    }, [])
    if (iseLoding) {
    return <Spinner animation="border"/>
}
    return (
        <div className="flex-card">
            {users.map((user, index) => <UserCard user={user} key={index} />)}
            
        </div>
    )
}

export default UserList;