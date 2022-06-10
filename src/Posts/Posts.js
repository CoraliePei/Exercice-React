import './Posts.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Posts() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((reponse) => setPosts(reponse.data));
    }, []);

    return (
        <div className='posts'>
            <h1>Posts de blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};