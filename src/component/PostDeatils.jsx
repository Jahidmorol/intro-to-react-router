import React from 'react';
import { useLoaderData,useNavigate } from 'react-router-dom'

const PostDeatils = () => {
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
 const PostDeatils = useLoaderData();
 const {id, title, useId, body} = PostDeatils
    return (
        <div className='border-2 my-5 p-5 rounded-xl'>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Described: {body}</p>
            <button onClick={handleGoBack} className='btn my-5'>Go Back</button>
        </div>
    );
};

export default PostDeatils;