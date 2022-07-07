import React from "react";
import Card from "../UI/Card";
import classes from "./Home.module.css";
const Home = (props) => {
  const user = props.data;
  return (
    <Card className={classes.home}>
      <h1>Welcome Back!!</h1>
      <p>{user}</p>
    </Card>
  );
};
export default Home;
