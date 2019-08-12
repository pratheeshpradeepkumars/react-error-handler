import React from "react";

class ErrorHandler extends React.Component {
  state = {
    error: false
  };
  componentDidCatch(error, details) {
    this.setState({
      error: true
    });
  }
  render() {
    return this.state.error
      ? "Oops!!! Something went wrong"
      : this.props.children;
  }
}

export default ErrorHandler;
