import React, {useContext, Component, useState} from 'react';

import './App.css';
import './Forum/Forum.css'
import {useParams, useSearchParams} from 'react-router-dom';

import TopicItem from './Forum/TopicItem';
import {getTopics, createTopic} from './Forum/CommonAPI';
import Pagination from './Forum/Pagination';

import { AuthContext } from "../firebase/Auth";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
  

function TopicForm({ cid, self, update }) {
    
    const { currentUser } = useContext(AuthContext);
    const [shown, setShown] = useState(false);
    const [inputVal, setInpVal] = useState("");
    const [nameVal, setNamVal] = useState("");

    const openForm = () => {
        setShown(current => !current);
    }

    const submitTopic = () => {
        createTopic({name: nameVal}, {post: inputVal}, {cid: cid}, {user: currentUser}).then((value) => {
            alert("successfully created topic");
            update({currentPage: self.page, totalPages: self.state.pages});
            setInpVal("");
            setNamVal("");
        }, (reason) => {
            alert(`Failed to create topic: ${reason}`)
        })
    }

    const onChangeName = (event) => {
        setNamVal(event.target.value);
    }

    const onChangePost = (event) => {
        setInpVal(event.target.value);
    }

    return (
        <div id="topicCreate">
            <button onClick={openForm}>Create Topic</button>
            {shown && (<form id="tform">
                <label htmlFor="name">Topic Name:</label>
                <input type="text" id="tname" name="name" value={nameVal} onChange={onChangeName}></input><br />
                <textarea name="post" id="tpost" rows="10" cols="155" value={inputVal} placeholder="Enter post content here..." onChange={onChangePost}>
                </textarea>
                <div id="sep"></div>
                <button id="tsubmit" onClick={submitTopic} type="button">Submit</button>
            </form>)}
        </div>
    )
}

class Home extends Component {
    constructor(props) {
        super(props);
        const {cid, name} = this.props.params;
        this.cid = cid;
        this.name = name;
        this.page = 1;
        this.state = {data: {topics: {}}, pages: 1};
    }
    updateData(page){
        getTopics({cid: this.cid}, {name: this.name}, {page: page.currentPage}).then(result => {
            this.setState({data: result, pages: result.pagination.last.page});
        })
    }

    componentDidMount(){
        this.updateData({currentPage: this.page, totalPages: this.state.pages});
    }

    render(){
        let updateDataBound = this.updateData.bind(this);
        return (
        <div>
            <h1>Community</h1>
            <h2>Welcome to the community board for {this.name.replaceAll("-", " ")}</h2>
            <TopicForm cid={this.cid} self={this} update={updateDataBound}></TopicForm>
            <ul>
                {Object.keys(this.state.data.topics).map((key, i) => <TopicItem key={`${this.name}-topic-${i}`} data={this.state.data} dkey={key}/>)}
            </ul>
            <Pagination totalPages={this.state.pages} pageNeighbors={2} onPageChanged={updateDataBound} />
        </div>)
    }
};

export default withParams(Home);