import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {decode} from "html-entities";

class CategoryItem extends Component {
  render() {
      return (
          <li>
            <Link to={"./category/" + this.props.category.cid + "/" + this.props.category.name.replaceAll(" ", "-")}>
              <div class="category">
                <div class="category-icon">
                  <img src={decode(this.props.category.backgroundImage)}></img>
                </div>
                <div class="category-name">
                  <p>{this.props.category.name}</p>
                </div>
              </div>
            </Link>
          </li>
          );
  }
}

export default CategoryItem;