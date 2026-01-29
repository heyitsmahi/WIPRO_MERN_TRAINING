import React, { Component } from "react";

export default class Employee extends Component {
  componentDidMount() {
    console.log("Mounted");
  }

  componentWillUnmount() {
    console.log("Destroyed");
  }

  render() {
    return (
      <div>
        <h2>Employee Component</h2>
            <button onClick={() => setShowEmp(!showEmp)}>
        {showEmp ? "Hide Employee (Class)" : "Show Employee (Class)"}
      </button>

      <br />
      <br />

      {showEmp && <Employee />}

      <hr />
        
      </div>
    );
  }
}