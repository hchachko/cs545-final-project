import React, {useState, Component} from 'react';

import './App.css';
import './Forum/Forum.css'
import {useParams} from 'react-router-dom';
import {useAsync} from 'react-async';

import TopicItem from './Forum/TopicItem';
import {getTopics} from './Forum/CommonAPI';

class TopicForm extends Component {
    constructor(props){
        super(props);
        this.state = {name: "", post: ""}
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value})
    }
    render(){
        return (
            <div>
                
            </div>
        )
    }
}

function createTopic(){

}

function Home () {
    let {cid, name} = useParams();
    let {data, error, isPending} = useAsync({promiseFn: getTopics, cid: cid, name: name});
    name = name.replaceAll("-", " ");
    if (isPending) return (
        <h3>
            "Loading topics, please wait..."
        </h3>
    );
    if (error) return (
        <h3>
            "Failed to load topics: {error.message}"
        </h3>
    )
    if (data) return (
        <div>
            <h1>Community</h1>
            <h2>Welcome to the community board for {name}</h2>
            <button onClick={createTopic}>Create Topic</button>
            <ul>
                {Object.keys(data.topics).map((key, i) => <TopicItem key={`${name}-topic-${i}`} data={data} dkey={key}/>)}
            </ul>
        </div>
    );
    return null
};

export default Home;