import React, {useContext, Component, useState} from 'react';

import './App.css';
import './Forum/Forum.css'
import {useParams} from 'react-router-dom';

import PostItem from './Forum/PostItem';
import {getPosts, createPost} from './Forum/CommonAPI';

import { AuthContext } from "../firebase/Auth";
import Pagination from './Forum/Pagination';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
  

function PostForm({ tid, self, update }) {
    
    const { currentUser } = useContext(AuthContext);
    const [edit, setEdit] = useState(false);
    const [inputVal, setVal] = useState("");

    const submitPost = () => {
        let postFunc = createPost;
        postFunc({post: inputVal}, {tid: tid}, {user: currentUser}).then((value) => {
            alert("successfully created post");
            update({currentPage: self.page, totalPages: self.state.pages});
            setVal("");
        }, (reason) => {
            alert(`Failed to create post: ${reason}`);
        })
    }

    const onChangePost = (event) => {
        setVal(event.target.value);
    }

    return (
        <div id="postCreate">
            <form id="pform">
                <textarea name="post" id="tpost" rows="10" cols="155" value={inputVal} placeholder="Enter post content here..." onChange={onChangePost} />
                <div id="sep"></div>
                <button id="psubmit" onClick={submitPost} type="button">Submit Post</button>
            </form>
        </div>
    )
}


class Home extends Component {
    constructor(props){
        super(props)
        const {tid, name} = this.props.params;
        this.tid = tid;
        this.name = name;
        this.page = 1;
        this.state = {data: {posts: {}, category: {name: ""}, tid: 0}, pages: 1};
    }

    updateData(page){
        getPosts({tid: this.tid}, {name: this.name}, {page: page.currentPage}).then(result => {
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
                <h2>Welcome to the community board for {this.state.data.category.name}</h2>
                <h3>You're looking at the thread - {this.name.replaceAll("-", " ")}</h3>
                <ul>
                    {Object.keys(this.state.data.posts).map((key, i) => <PostItem key={`${this.state.data.category.name}-${this.name}-post-${i}`} data={this.state.data} dkey={key}/>)}
                </ul>
                <PostForm tid={this.state.data.tid} self={this} update={updateDataBound}/>
                <Pagination totalPages={this.state.pages} pageNeighbors={2} onPageChanged={updateDataBound} />
            </div>
        );
    }
};

export default withParams(Home);