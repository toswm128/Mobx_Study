import React, { useState, useContext } from "react";
import Card from "../components/Card";
import { ListContext } from "../Store/Store";

const Main = () => {
  const { list, handleList } = useContext(ListContext);
  console.log(list, handleList);

  return (
    <div>
      <div>Main</div>
      <Card list={list} />
    </div>
  );
};

export default Main;
