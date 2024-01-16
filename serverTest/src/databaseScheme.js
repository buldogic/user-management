// -- Table: test.user_data

// -- DROP TABLE IF EXISTS test.user_data;

// CREATE TABLE IF NOT EXISTS test.user_data
// (
//     id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
//     name text COLLATE pg_catalog."default",
//     surname text COLLATE pg_catalog."default",
//     patronymic text COLLATE pg_catalog."default",
//     email text COLLATE pg_catalog."default",
//     imj text COLLATE pg_catalog."default",
//     date text COLLATE pg_catalog."default",
//     CONSTRAINT user_data_pkey PRIMARY KEY (id)
// )

// TABLESPACE pg_default;

// ALTER TABLE IF EXISTS test.user_data
//     OWNER to andreyafonin;

// databaseScheme.js
// databaseScheme.js
// databaseScheme.js
import db, { connectToDatabase, closeConnection } from './db.js';

async function setupDatabase() {
  try {
    await connectToDatabase();

    // Определение схемы таблицы
    const userDataTable = 'user_data';

    // Определение столбцов таблицы с типами данных
    const columns = [
      'id BIGINT',
      'name TEXT',
      'surname TEXT',
      'patronymic TEXT',
      'email TEXT',
      'imj TEXT',
      'date TEXT'
    ].join(', ');

    // Создание SQL-запроса для создания таблицы
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS ${userDataTable} (
        ${columns},
        CONSTRAINT user_data_pkey PRIMARY KEY (id)
      )
    `;

    // Маршрут для создания таблицы
    await db.none(createTableQuery);
    console.log('Таблица успешно создана');
  } catch (error) {
    console.error('Ошибка при создании таблицы:', error);
  } finally {
    await closeConnection();
  }
}

// Вызов функции для установки базы данных
setupDatabase();
