import { Button } from "../components/button";
import CardUsers from "../components/card/cardUser";
import { Link } from "react-router-dom";
import FilterUsers from "../components/filterUser";
import style from "./index.module.css";


const UsersPage = () => {
  return (
    <>
      <div className={style.contaenirheader}>
          <FilterUsers/>
        <div className={style.element}>
          <Link className="linkText" to={"/users/add"}>
            <Button>Добавить</Button>
          </Link>
        </div>
      </div>
      <CardUsers />
    </>
  );
};
export default UsersPage;
