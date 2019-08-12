import React from "react";

class ListComponent extends React.Component {
  state = {
    list: ["Card board", "Pen", "Cutter", "Glue"]
  };

  createError = e => {
    console.error(e.list);
    this.setState({ list: e.list });
  };

  render() {
    const { list } = this.state;
    return (
      <>
        <button onClick={this.createError}>Click here</button>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default ListComponent;
