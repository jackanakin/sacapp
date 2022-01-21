require("dotenv/config");

module.exports = {
  dialect: "postgres",
  host: process.env.MAINDB_HOST,
  username: process.env.MAINDB_USER,
  password: process.env.MAINDB_PASS,
  database: process.env.MAINDB_NAME,
  logging: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};