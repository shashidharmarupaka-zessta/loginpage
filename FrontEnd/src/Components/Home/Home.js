import React from "react";

import Card from "../UI/Card";
import classes from "./Home.module.css";
const Home = (props) => {
  const user = props.data;
  const userName = user.split("@");
  return (
    <Card className={classes.home}>
      <h1>Welcome Back {userName[0]}</h1>
    </Card>
  );
};
export default Home;
