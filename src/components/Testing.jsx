import React, { Component } from "react";

class Testing extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Post One",
        body: "This is post one body"
      },
      {
        id: 2,
        title: "Post Two",
        body: "This is post two body"
      },
      {
        id: 3,
        title: "Post Three",
        body: "This is post three body"
      },
      {
        id: 4,
        title: "Post Four",
        body: "This is post four body"
      }
    ]
  };
  render() {
    const handleChange = () => {
      let posts = this.state.posts.map(post => {
        if (post.id === 1) {
          post.body = "hello post one";
        }
        return post;
      });
      this.setState({ posts });
    };
    const handleDelete = () => {
      let posts = this.state.posts.filter(post => post.id !== 4);
      this.setState({ posts });
    };
    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        ))}

        <div>
          <button onClick={handleChange}>change one</button>
          <button onClick={handleDelete}>delete four</button>
        </div>
      </div>
    );
  }
}

export default Testing;
