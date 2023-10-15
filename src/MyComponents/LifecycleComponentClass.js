import React, { useState, useEffect } from "react";

export default class LifecycleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    fetch("https://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((res) => console.log(res.activity))
      .catch((err) => console.log("error is:" + err));
  }
  shouldComponentUpdate() {
    return this.state.count % 2 === 0 ? true : false;
  }
  componentDidUpdate() {
    console.log(this.state.count);
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("Component will unmount.");
  }
  increaseCount = () => {
    this.setState({ count: ++this.state.count }); //консоль: dont mutate state directly. Use setState. Так должно быть или есть другое решение?
  };

  render() {
    return (
      <>
        <h1>LifecycleComponent</h1>
        <button onClick={this.increaseCount}>Increase</button>
      </>
    );
  }
}
