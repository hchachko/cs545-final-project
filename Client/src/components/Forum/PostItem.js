import React, { Component } from "react";
import {decode} from "html-entities";
import DOMPurify from 'dompurify';

class TopicItem extends Component {
  render() {
      let postdata = this.props.data.posts[this.props.dkey];
      return (
          <li> 
            <div className="forum">
                <div className="forum-icon">
                    <img src={decode(this.props.data.category.backgroundImage)} alt=""></img>
                </div>
                <div className="forum-post-creator">
                  <p>Written by: {postdata.user.username}</p>
                </div>
                <div className="forum-post" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(postdata.content)}}></div>
                <div className="black" />
                <div className="forum-post-date">
                  <p>Posted: {String(new Date(postdata.timestampISO))}</p>
                </div>
            </div>
          </li>
          );
  }
}

export default TopicItem;