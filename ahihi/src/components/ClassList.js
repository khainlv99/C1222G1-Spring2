import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassList = () => {
    const [classList, setClassList] = useState([]);

    useEffect(() => {
        // Gọi API để lấy danh sách lớp học
        axios.get('http://localhost:8080/api/auth/class')
            .then(response => {
                setClassList(response.data);
            })
            .catch(error => {
                console.error('Error fetching class list:', error);
            });
    }, []);

    return (
        <div>
            <h1>Class List</h1>
            <ul>
                {classList.map(classItem => (
                    <li key={classItem.id}>
                        <ul>{classItem.name}</ul>
                        <ul>{classItem.schedule}</ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClassList;
