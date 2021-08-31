import React, { createContext, useState } from "react";

export const ListContext = createContext({
  list: [],
  handleList: () => {},
});

const Store = props => {
  const [list, setList] = useState([]);
  const handleList = list => {
    setList(list);
  };

  console.log(props);

  return (
    <ListContext.Provider value={{ list, handleList }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default Store;
