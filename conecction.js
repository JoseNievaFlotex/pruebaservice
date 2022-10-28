

const connection = {
  user: "Flotex2022",
  password: "P9?9og32g",
  server: "18.168.10.231",
  port: 1093,
  database: "flotexpe_DB",
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

module.exports = connection;
