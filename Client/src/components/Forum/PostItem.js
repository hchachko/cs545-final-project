import React, { Component } from "react";
import {decode} from "html-entities";
import DOMPurify from 'dompurify';

class TopicItem extends Component {
  render() {
      let postdata = this.props.data.posts[this.props.dkey];
      return (
          <li> 
            <div class="forum">
                <div class="forum-icon">
                    <img src={decode(this.props.data.category.backgroundImage)} alt=""></img>
                </div>
                <div class="forum-name" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(postdata.content)}}></div>
            </div>
          </li>
          );
  }
}

export default TopicItem;