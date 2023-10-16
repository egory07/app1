import React from "react";
import LifecycleComponent from "./MyComponents/LifecycleComponentClass";

export default class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      showLifecycleComponent: true,
      count: 0,
    };
  }

  delete = () => {
    this.setState({ showLifecycleComponent: false });
  };

  increaseCount = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: ++prevState.count,
      };
    });

    //({ count: ++this.state.count }); //консоль: dont mutate state directly. Use setState. Так должно быть или есть другое решение?
  };

  componentDidUpdate() {
    console.log(this.state.count);
  }
  render() {
    return (
      <>
        {this.state.showLifecycleComponent && (
          <LifecycleComponent count={this.state.count} />
        )}

        <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.delete}>Delete</button>
      </>
    );
  }
}
