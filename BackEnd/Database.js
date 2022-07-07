const mysql = require("mysql");
const { myToken } = require("./TokenGeneration");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "geetha@26",
  database: "login_details",
  multipleStatements: true,
});

connection.connect((error) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("connection Established");
  }
});

const executeQuery = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, rows) => {
      if (err) {
        reject(err);
      } else if (rows.length > 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
const selectQuery = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, rows) => {
      if (err) {
        reject(err);
      } else if (rows.length > 0) {
        resolve(rows[0]);
      } else {
        resolve(false);
      }
    });
  });
};



const database = async (email, password) => {
  const query = `SELECT * FROM USER_DETAILS WHERE EMAIL='${email}' AND PASSWORD='${password}'`;
  const dbresponse = await executeQuery(query);
  if (dbresponse) {
    const token = myToken(email);
    return token;
  } else {
    return "Enter a valid user details";
  }
};
const userDetails = async (email) => {
  const query = `SELECT * FROM USER_DETAILS WHERE EMAIL= '${email}'`;
  const dbresponse = await selectQuery(query);
  return dbresponse;
};
module.exports = {
  database,
  userDetails,
};



// const even = (num) => {
//   return new Promise ((resolve, reject) => {
// if(num%2 === 0){
//   resolve(num);
// }
// else {
//   reject(num);
// }
//   })
// }