import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";
import { Button } from "../../button";

export const FormUser = (props) => {
  const [name, setName] = useState(props.value.name);
  const [surname, setSurname] = useState(props.value.surname);
  const [patronymic, setPatronymic] = useState(props.value.patronymic);
  const [email, setEmail] = useState(props.value.email);
  const [date, setDate] = useState( props.value.date );
  const [img, setImg] = useState(props.value.img);
  const [message, setMessage] = useState("Заполните данные");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !surname || !email || !date) {
      setMessage("Данные не коректны");
      return;
    }
    const formData = { name, surname, patronymic, date, email, img };
    props.onChange(formData);
    // setName("");
    // setSurname("");
    // setPatronymic("");
    // setEmail("");
    // setDate("");
    // setImg("");
    setMessage("Данные заполнены");
  };

  return (
    <div>
      <Link className="linkText" to={"/users"}>
        <Button>Назад</Button>
      </Link>

      <div className={style.containerForm}>
        <form onSubmit={handleSubmit}>
          <span>Имя:</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className={style.input}
          />
          <span>Фамилия:</span>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Surname"
            className={style.input}
          />
          <span>Отчество:</span>
          <input
            value={patronymic}
            onChange={(e) => setPatronymic(e.target.value)}
            placeholder="Patronymic"
            className={style.input}
          />
          <span>День рождения:</span>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Data"
            className={style.input}

          />
          <span>Почта:</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={style.input}
          />
          <span>Фото:</span>
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Image"
            className={style.input}
          />
          <Button type="submit">Сохранить</Button>
        </form>
        {message ? (
          <div className={style.message}>{message}</div>
        ) : (
          <div className={style.message}>{message}</div>
        )}
      </div>
    </div>
  );
};
