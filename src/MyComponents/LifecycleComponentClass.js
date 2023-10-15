import React, { useState, useEffect } from "react";

export default class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentDidMount() {
    fetch("https://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((res) => console.log(res.activity))
      .catch((err) => console.log("error is:" + err));
  }

  shouldComponentUpdate() {
    return this.props.count % 2 !== 0 ? true : false;
  }

  componentWillUnmount() {
    console.log("Component will unmount.");
  }

  render() {
    return (
      <>
        <h1>LifecycleComponent</h1>
      </>
    );
  }
}
