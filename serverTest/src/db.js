import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp({
  user: 'andreyafonin',
  password: 'postgres',
  database: 'test',
});

export async function connectToDatabase() {
  await db.connect();
  console.log('Соединение с базой данных установлено');
}

export async function closeConnection() {
  await db.$pool.end();
  console.log('Соединение с базой данных закрыто');
}

export default db;
