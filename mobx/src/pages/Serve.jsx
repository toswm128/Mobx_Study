import React, { useContext } from "react";
import { ListContext } from "../Store/Store";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import useStores from "../Hooks/useStore";

const Serve = () => {
  const { store } = useStores();

  const list = store.list;

  return (
    <div>
      <div>Serve</div>
      <Card list={list} />
      <Link to="/">mm</Link>
    </div>
  );
};

export default Serve;
