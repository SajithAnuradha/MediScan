import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const History = () => {
  const { url, token } = useContext(StoreContext);

  return <div>History</div>;
};

export default History;
