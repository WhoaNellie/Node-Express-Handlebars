const connection = require("../config/connection");

let orm = {
  selectAll: function (table) {
    return new Promise((resolve, reject) => {
      let queryString = `select * from ${table}`;
      connection.query(queryString, function (err, result) {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  insertOne: function (table, val) {
    return new Promise((resolve, reject) => {
      let queryString = `insert into ${table} (burger_name) values (?);`;
      connection.query(queryString, val, function (err, result) {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  updateOne: function (table, id) {
    return new Promise((resolve, reject) => {
      let queryString = `update ${table} set devoured=true where id=${id};`;
      connection.query(queryString, function (err, result) {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
};

module.exports = orm;