import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Serve from "../pages/Serve";
// import Store, { ListContext } from "../Store/Store";
import { Provider } from "mobx-react";
import store from "../Store/MobxStore";
function App() {
  // const [list, setList] = useState([]);
  // const handleList = list => {
  //   setList(list);
  // };

  console.log(store.store);

  return (
    <Provider store={store.store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/serve" component={Serve} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
