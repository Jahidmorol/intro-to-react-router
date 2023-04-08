import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div className='md:grid grid-cols-3 gap-3'>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;