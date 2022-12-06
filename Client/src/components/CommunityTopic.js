import React, {useContext, Component, useState} from 'react';

import './App.css';
import './Forum/Forum.css'
import {useParams} from 'react-router-dom';

import PostItem from './Forum/PostItem';
import {getPosts} from './Forum/CommonAPI';

import { AuthContext } from "../firebase/Auth";
import Pagination from './Forum/Pagination';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
  

// function PostForm({ cid }) {
    
//     const { currentUser } = useContext(AuthContext);
//     const [shown, setShown] = useState(false);
//     let name, post;

//     const openForm = () => {
//         setShown(current => !current);
//     }

//     const submitTopic = async () => {
//         createTopic({name: name}, {post: post}, {cid: cid}, {user: currentUser}).then((value) => {
//             alert("successfully created topic")
//         }, (reason) => {
//             alert(`Failed to create topic: ${reason}`)
//         })
//     }

//     const onChangeName = (event) => {
//         name = event.target.value
//     }

//     const onChangePost = (event) => {
//         post = event.target.value
//     }

//     return (
//         <div id="topicCreate">
//             <button onClick={openForm}>Create Topic</button>
//             {shown && (<form id="tform">
//                 <label htmlFor="name">Topic Name:</label>
//                 <input type="text" id="tname" name="name" onChange={onChangeName}></input><br />
//                 <textarea name="post" id="tpost" rows="10" cols="155" placeholder="Enter post content here..." onChange={onChangePost}>
//                 </textarea>
//                 <div id="sep"></div>
//                 <button id="tsubmit" onClick={submitTopic} type="button">Submit</button>
//             </form>)}
//         </div>
//     )
// }


class Home extends Component () {
    constructor(props){
        super(props)
        const {tid, name} = this.props.params;
        this.tid = tid;
        this.name = name;
        this.page = 1;
        this.state = {data: {posts: {}, category: ""}, pages: 1};
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
                <h2>Welcome to the community board for {this.state.data.category.name.replaceAll("-"," ")}</h2>
                <h3>You're looking at the thread - {this.name.replaceAll("-", " ")}</h3>
                <ul>
                    {Object.keys(this.state.data.posts).map((key, i) => <PostItem key={`${this.state.data.category.name}-${this.name}-post-${i}`} data={this.data} dkey={key}/>)}
                </ul>
                <Pagination totalPages={this.state.pages} pageNeighbors={2} onPageChanged={updateDataBound} />
            </div>
        );
    }
};

export default Home;