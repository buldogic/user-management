import pkg from "pg";
const { Client } = pkg;
const client = new Client({
  user: "andreyafonin",
  password: "postgres",
  database: "test",
});
await client.connect();

const res = await client.query("SELECT * FROM test.user_data");
await client.end();
