// Connect database by this file 
module.exports = {
  development: {
      client: 'mysql',
      connection: "mysql://root:Deepak@20@localhost:3306/objection",
      migrations: {
          directory: __dirname + "/migrations",
      },

  },

  production: {
    client: "mysql",
    connection: "mysql://root:Deepak@20@localhost:3306/objection",
  },

};