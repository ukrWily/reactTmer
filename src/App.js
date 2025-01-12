import React, { Component } from "react";

import "./App.css";
import { Posts } from "./components/posts";
import Timer from "./components/Timer/Timer";
import { Form } from "./components/Form";

export class App extends Component {
  state = {
    posts: [
      { id: "qw1", name: "HTML" },
      { id: "qw2", name: "CSS" },
      { id: "qw3", name: "JS" },
      { id: "qw4", name: "React" },
    ],
  };

  handleClose = (id) => {
    console.log(id);

    const { posts } = this.state;
    const newPosts = posts.filter((post) => post.id !== id);
    this.setState({ posts: newPosts });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {/* <Timer />; */}
        {/* <Posts cb={this.handleClose} posts={posts} />; */}
        <Form />;
      </div>
    );
  }
}

export default App;
