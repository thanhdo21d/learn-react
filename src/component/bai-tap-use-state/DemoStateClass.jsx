import React, { Component } from "react";

export class DemoStateClass extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handelSubmit = () => {};
  handelChange = (event) => {
    console.log(event.target.value);
  };

  handelChangeTextera = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input
            onChange={this.handelChange}
            style={{ border: "red" }}
            type="text"
            placeholder="enter your name ?..."
            name=""
            id=""
          />
          <br />
          <textarea
            onChange={this.handelChangeTextera}
            style={{ border: "red" }}
            name=""
            id=""
          />
          <select value>
            <option value="">iphone 12</option>
            <option value="">iphone 13</option>
            <option value="">iphone 14</option>
          </select>
        </form>
      </div>
    );
  }
}

export default DemoStateClass;
