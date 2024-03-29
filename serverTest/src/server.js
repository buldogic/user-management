import express from "express";
import cors from "cors";
import pkg from "pg";
import morgan from "morgan";

const PORT = 8000;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

const app = express();
app.use(cors(corsOptions));

app.use(express.json());

const { Client } = pkg;

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST
});

const LIMIT = 5;

app.use(morgan('tiny'))

app.get("/api/user", async function (req, res) {
  const { page = 0, filterName, filterValue } = req.query;
  const isValid = ["email", "name", "surname"].includes(filterName);
  const hasValue = Boolean(filterValue)
  let userRes;
  let countUser;
  if (isValid && hasValue) {
    userRes = await client.query(
      `SELECT * FROM user_data WHERE ${filterName} = $3 ORDER BY id ASC LIMIT $1  OFFSET $2 `,
      [LIMIT, page * LIMIT, filterValue]
    );
    countUser = await client.query(`SELECT COUNT(id) FROM user_data WHERE ${filterName} = $1`,
      [filterValue]);
  } else {
    userRes = await client.query(
      "SELECT * FROM user_data ORDER BY id ASC LIMIT $1  OFFSET $2 ",
      [LIMIT, page * LIMIT]
    );
    countUser = await client.query("SELECT COUNT(id) FROM user_data");
  }
  res.send({ users: userRes.rows, count: countUser.rows[0].count, limit: LIMIT });
});


app.get("/api/user/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const userRes = await client.query(
      "SELECT id, name, surname, email, date, imj, patronymic FROM user_data WHERE id = $1",
      [id]
    );
    res.send(userRes.rows[0]);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/users/add", async function (req, res) {
  const { name, surname, email, date, imj, patronymic } = req.body;
  try {
    const userNew = await client.query(
      "INSERT INTO user_data (name, surname, email, date, imj, patronymic) VALUES ($1, $2, $3, $4, $5, $6) returning id",
      [name, surname, email, date, imj, patronymic]
    );
    res.send(userNew);
  } catch (error) {
    console.error("Error adding new user:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/api/user/:id", async function (req, res) {
  const { id } = req.params;
  const { name, surname, email, date, imj, patronymic } = req.body;
  const userUpdate = await client.query(
    "UPDATE user_data SET name = $2, surname = $3, email = $4, date = $5, imj = $6, patronymic = $7 WHERE id = $1",
    [id, name, surname, email, date, imj, patronymic]
  );
  res.send(userUpdate.rows);
});

app.listen(PORT, async function () {
  await client.connect();
  console.log(`Example app listening on port ${PORT}!`);
});

process.on("exit", async function () {
  await client.end();
});
