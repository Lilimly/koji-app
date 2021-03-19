import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState({ array : [] });

    //get the posts array using axios
    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios (
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts({ array: data });
        }
        fetchPosts();
    }, [setPosts])

    return (
        <div className='container'>
            <h1>Posts List</h1>
            <div className="cards">
                {
                    posts.array.map(item => (
                        <Link to={"/posts/" + item.id} key={"posts" + item.id}>
                        <div className="card" key={"post-card" + item.id}>
                            <p key={"post-title" + item.id}>{item.title}</p>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;