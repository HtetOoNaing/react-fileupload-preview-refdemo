import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  onHandleClick = () => {
    console.log(this.inputRef.current.value);
    this.inputRef.current.value = "";
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.onHandleClick}>click</button>
      </div>
    );
  }
}

export default RefDemo;
