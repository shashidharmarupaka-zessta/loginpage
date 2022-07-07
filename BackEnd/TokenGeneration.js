const jwt = require("jsonwebtoken");
const my_secret_key =
  "7YRVMj/ugC4j0MNkXJvo6fB5OuyJ64v4W6mLuBEj5DA0gqFPnuc7xsoSQb+gi4XaUqEvgJAXBe0O6VNPi6VBXQ4CQXKPLopOfNKcIfjXnii8nl5q6fOj8F27eHuzxH5jXAIw+PXa4Ozd5s1/tPVbo0hlTr4A6J4Hmi5lLO6nx8dbyXKp8s8/H+2jOlIBqr3cJB/srg+a7nlc2A9Azw1YkCmjseVb4xvVFr26A5PdpKduwaFvPFxzt/dxaEivZAUyhAP1mlITCcayDL3J0PBbiEkL+nDItZCpmsMuZEjXqut5+9blxkzfR1V1lST3d1gwtm0eKKTgasNJDYsJtgHTcw==";

const myToken = (email) => {
  const token = jwt.sign({ email }, my_secret_key, {
    expiresIn: "180s",
  });
  console.log("token", token);
  return token;
};

const authenticationMiddleware = (req, res, next) => {
  const token = req.headers["token"];
  
  const decodedToken = jwt.verify(token, my_secret_key);
  const email = decodedToken.email;
  req.email = email;

  next();
};

module.exports = {
  myToken,
  authenticationMiddleware,
};
