import React from "react";
import { observer, inject } from "mobx-react";

@inject("yourstore")
@observer
export default class App extends React.Component<any> {
  render() {
    return (
      <div>
        <div>value = {this.props.yourstore.yourStore}</div>
        <div>
          <button onClick={this.props.yourstore.changeToWorld}>
            Change to world
          </button>
        </div>
      </div>
    );
  }
}
