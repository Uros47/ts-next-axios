import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import data from "@/store/data";

const Home = () => {
  const { getDataFromApi, dataFromRegres } = data;

  useEffect(() => {
    getDataFromApi();
  }, []);

  return <> {dataFromRegres ? dataFromRegres.map((user, i) => <p key={i}>{user.first_name + user.last_name}</p>) : null}</>;
};

export default observer(Home);
