import React from 'react';
import { Link,useNavigate } from 'react-router-dom'
const Post = ({post}) => {
    const {id, title, body,} = post;
    const navigate = useNavigate();
    // console.log(navigate);
    const handleNavigate = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='border-2 my-5 p-5 rounded-xl'>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p className='my-3'>Body: {body}</p>
            <Link to={`/post/${id}`}><button className='btn'>show details</button></Link>
            <button onClick={handleNavigate} className='btn mx-2'>Details another</button>
        </div>
    );
};

export default Post;