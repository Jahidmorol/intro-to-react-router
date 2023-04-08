import React from 'react';
import { useLoaderData } from "react-router-dom";
const FriendDetails = () => {
    const friendDetails = useLoaderData()
    // console.log(friendDetails);
    const {phone, email, name, id} = friendDetails;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Id: {id}</p>
        </div>
    );
};

export default FriendDetails;