// connect to database
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "default",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});
module.exports = pool;