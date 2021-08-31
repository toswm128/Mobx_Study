import React, { useContext } from "react";
import { ListContext } from "../Store/Store";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Serve = () => {
  const { list, handleList } = useContext(ListContext);

  return (
    <div>
      <div>Serve</div>
      <Card list={list} />
      <Link to="/">mm</Link>
    </div>
  );
};

export default Serve;
