import axios from "axios";
import React, { Component } from "react";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData = () => {
    if (this.props.match.params.postId) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.postId)
      ) {
        axios
          .get("/posts/" + this.props.match.params.postId)
          .then((res) => this.setState({ loadedPost: res.data }))
          .catch((err) => console.log(err));
      }
    }
  };

  deletePostHandler = () => {
    if (this.props.match.params.postId) {
      axios
        .delete("/posts/" + this.props.match.params.postId)
        .then((res) => console.log(res));
    }
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.postId) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1 style={{ textTransform: "capitalize" }}>
            {this.state.loadedPost.title}
          </h1>

          <p>{this.state.loadedPost.body}</p>

          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
