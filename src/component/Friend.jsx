import React from 'react';
import{ Link } from 'react-router-dom'

const Friend = ({friend}) => {
    const {email, name, id, phone} = friend;
    return (
        <div className='border-2 my-5 p-5 rounded-xl'>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><small>Id: {id}</small></p>
            <Link to={`/friend/${id}`}><button className='btn my-5'>FriendDetails</button></Link>
        </div>
    );
};

export default Friend;