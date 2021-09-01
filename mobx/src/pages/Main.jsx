import React, { useState } from "react";
// import Card from "../components/Card";
// import { ListContext } from "../Store/Store";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import useStores from "../Hooks/useStore";

const Main = () => {
  // const { list, handleList } = useContext(ListContext);
  const store = useStores();
  console.log(store);
  // const List = observer({ store });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");

  return (
    <div>
      <div>Main</div>
      {/* <Card list={list} /> */}

      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <input
        type="text"
        value={writer}
        onChange={e => setWriter(e.target.value)}
      />
      {/* <button
        onClick={() => {
          console.log(list);
          handleList([...list, { title, content, writer }]);
        }}
      >
        제출
      </button> */}
      <Link to="/serve">하이</Link>
    </div>
  );
};

export default Main;
