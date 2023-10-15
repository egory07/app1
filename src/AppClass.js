import React from "react";
import LifecycleComponent from "./MyComponents/LifecycleComponentClass";

export default class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      showLifecycleComponent: true,
    };
  }

  delete = () => {
    this.setState({ showLifecycleComponent: false });
  };

  render() {
    return (
      <>
        {this.state.showLifecycleComponent && <LifecycleComponent />}
        <button onClick={this.delete}>Delete</button>
      </>
    );
  }
}
