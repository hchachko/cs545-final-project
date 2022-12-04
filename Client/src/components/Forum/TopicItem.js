import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {decode} from "html-entities";

class TopicItem extends Component {
  render() {
      let topicdata = this.props.data.topics[this.props.dkey];
      return (
          <li>
            <Link style={{textDecoration: 'none'}} to={"/community/topic/"+topicdata.tid+"/"+topicdata.title.replaceAll(" ", "-")}>
              <div className="forum">
                <div className="forum-icon">
                  <img src={decode(this.props.data.backgroundImage)} alt=""></img>
                </div>
                <div className="forum-name">
                  <p>{topicdata.title}</p>
                </div>1
                <div className="forum-counts">
                  <p>Total Posts: {topicdata.postcount}</p>
                </div>
                <div className="forum-creator">
                  <p>Created by: {topicdata.user.username}</p>
                </div>
              </div>
            </Link>
          </li>
          );
  }
}

export default TopicItem;