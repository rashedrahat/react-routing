import React from "react";
import {Link} from 'react-router-dom';

const users = [
    {
        name: `Param`,
    },
    {
        name: `Vennila`,
    },
    {
        name: `Afrin`,
    },
];

const Users = () => {
    return (
        <>
            <h3>Users</h3>
            {users.map((user, index) => (
                <h5 key={index}>
                    <Link to={`/users/${index + 1}`}>{user.name}'s Page</Link>
                </h5>
            ))}
        </>
    );
};

export {
    users,
    Users,
}