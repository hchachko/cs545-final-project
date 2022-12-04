import React, {useState, Component} from 'react';

import './App.css';
import './Forum/Forum.css'
import {useParams} from 'react-router-dom';
import {useAsync} from 'react-async';

import PostItem from './Forum/PostItem';
import {getPosts} from './Forum/CommonAPI';

function Home () {
    let {tid, name} = useParams();
    let {data, error, isPending} = useAsync({promiseFn: getPosts, tid: tid, name: name});
    name = name.replaceAll("-", " ");
    if (isPending) return (
        <h3>
            "Loading posts, please wait..."
        </h3>
    );
    if (error) return (
        <h3>
            "Failed to load posts: {error.message}"
       </h3>
    )
    if (data) return (
        <div>
            <h1>Community</h1>
            <h2>Welcome to the community board for {data.category.name}</h2>
            <h3>You're looking at the thread - {name}</h3>
            <ul>
                {Object.keys(data.posts).map((key, i) => <PostItem key={`${data.category.name}-${name}-post-${i}`} data={data} dkey={key}/>)}
            </ul>
        </div>
    );
    return null;
};

export default Home;