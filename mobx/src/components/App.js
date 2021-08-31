import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Serve from "../pages/Serve";
import Store, { ListContext } from "../Store/Store";

function App() {
  const [list, setList] = useState([
    {
      title: "제목1",
      content: "내용1",
      writer: "작성자1",
    },
    {
      title: "제목2",
      content: "내용2",
      writer: "작성자2",
    },
    {
      title: "제목3",
      content: "내용3",
      writer: "작성자3",
    },
  ]);
  const handleList = list => {
    setList(list);
  };
  return (
    <Store>
      <ListContext.Provider value={{ list: list, handleList }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/serve" component={Serve} />
          </Switch>
        </Router>
      </ListContext.Provider>
    </Store>
  );
}

export default App;
