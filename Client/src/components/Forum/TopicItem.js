import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {decode} from "html-entities";

class TopicItem extends Component {
  render() {
      return (
          <li>
            {this.props.category} - {this.props.topic}
          </li>
          );
  }
}

export default TopicItem;