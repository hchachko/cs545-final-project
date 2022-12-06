import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from './actions/forum'
import CategoryItem from "./CategoryItem";
class Categories extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }
    render() {
        return (
            <div className="categories">
                <h2>Categories</h2>
                <ul>
                    {this.props.categories.map((cat, i) => <CategoryItem key={`category-${i}`} category={cat} />)}
                </ul>
          </div>
            );
    }
}
function mapStateToProps({ forum }) {
    return {
        categories: forum.categories
    };
}
export default connect(mapStateToProps, { fetchCategories })(Categories);