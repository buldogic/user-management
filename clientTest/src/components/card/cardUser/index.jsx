import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, userActions} from "../../../store/usersSlice";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../button";
import userImg from '../../../../public/img/userdef.svg'

const CardUsers = () => {
  const users = useSelector((state) => state.users.users);
  const pages = useSelector((state) => state.users.pages);
  const dispatch = useDispatch();
  const maxPages = Math.ceil(pages.count / pages.limit);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [pages]);


  return (
    <div className={style.container}>
      <div className={style.text}>Все пользователи {pages.count}.</div>
      <div className={style.containerCard}>
        {users.map((user) => (
          <div key={user.id} className={style.usersCard}>
            <div className={style.userAvatar}>
              <img
              className={style.img}
                src={user.img || userImg}
                alt={`${user.name}'s Avatar`}
              />
            </div>
            <div className={style.userInfo}>
              <div className={style.userText}>
                {user.surname} {user.name}
              </div>
              <div className={style.userText}>{user.email}</div>
              <div className={style.userText}>{user.date}</div>
            </div>
            <div>
              <Link className="linkText" to={`/users/${user.id}`}>
                <Button>Информация</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Button onClick={() => dispatch(userActions.setPage(Math.max(pages.current - 1, 0)))}>
        &lt;
        </Button>
        <span className={style.span}>
          {pages.current + 1} из {maxPages}
        </span>
        <Button
          onClick={() => dispatch(userActions.setPage(Math.min(pages.current + 1, maxPages - 1)))}
        >
         &gt;
        </Button>
      </div>
    </div>
  );
};

export default CardUsers;
