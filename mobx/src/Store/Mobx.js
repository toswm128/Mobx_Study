import { observable, action } from "mobx";

class MOBX {
  @observable list = [{ write: "aa" }];

  @action
  handleList = value => {
    this.list = value;
  };
}

export default MOBX;
