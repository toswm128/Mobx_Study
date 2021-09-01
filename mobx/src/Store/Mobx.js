import { observable, action } from "mobx";

class MOBX {
  @observable list = [{ title: "a", content: "aa", writer: "aaa" }];

  @action
  handleList = value => {
    console.log(value);
    this.list = value;
  };
}

export default MOBX;
