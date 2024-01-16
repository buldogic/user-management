import express from'express';
const app = express();
const port = process.env.PORT || 3000;

// Обработка корневого маршрута
app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
