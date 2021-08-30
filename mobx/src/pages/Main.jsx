import React, { useState } from "react";
import Card from "../components/Card";

const Main = () => {
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

  return (
    <div>
      <div>Main</div>
      <Card list={list} />
    </div>
  );
};

export default Main;
