import React, { useState, useContext, useMemo } from "react";
import Card from "../components/Card";
import { ListContext } from "../Store/Store";
import { Link } from "react-router-dom";

const Main = () => {
  const { list, handleList } = useContext(ListContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");

  return (
    <div>
      <div>Main</div>
      <Card list={list} />

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
      <button
        onClick={() => {
          console.log(list);
          handleList([...list, { title, content, writer }]);
        }}
      >
        제출
      </button>
      <Link to="/serve">하이</Link>
    </div>
  );
};

export default Main;
