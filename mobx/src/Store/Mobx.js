import { observable, action, makeObservable, makeAutoObservable } from "mobx";

class MOBX {
  list = [{ title: "a", content: "aa", writer: "aaa" }];

  constructor() {
    // makeObservable(this, {
    //   list: observable,
    //   handleList: action,
    // });
    makeAutoObservable(this);
  }

  handleList = value => {
    console.log(value);
    this.list = value;
  };
}

export default MOBX;
