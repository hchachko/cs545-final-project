import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {decode} from "html-entities";

class CategoryItem extends Component {
  render() {
      return (
          <li>
            <Link to={"./category/" + this.props.category.cid + "/" + this.props.category.name.replaceAll(" ", "-")}>
              <div class="forum">
                <div class="forum-icon">
                  <img src={decode(this.props.category.backgroundImage)} alt={this.props.category.name}></img>
                </div>
                <div class="forum-name">
                  <p>{this.props.category.name}</p>
                </div>
                <div class="forum-counts">
                  <p>Total Topics: {this.props.category.totalTopicCount}</p>
                  <p>Total Posts: {this.props.category.totalPostCount}</p>
                </div>
              </div>
            </Link>
          </li>
          );
  }
}

export default CategoryItem;