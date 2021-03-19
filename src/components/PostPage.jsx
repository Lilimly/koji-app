import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostPage ( { match }) {
    const [post, setPost] = useState({});
    const postId = match.params.id;

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await axios (
                "https://jsonplaceholder.typicode.com/posts/" + postId
            );
            setPost(data);
        }
        fetchPost();
    }, [postId, setPost])

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <h2>Post content created by {post.userId}</h2>
            <p>{post.body}</p>
            <Link to="/" className="nav-link">
                Back to all posts
            </Link>
        </div>
    )
}

export default PostPage;