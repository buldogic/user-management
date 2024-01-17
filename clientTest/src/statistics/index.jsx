import { Link, Outlet } from "react-router-dom";
import style from "./index.module.css";
import { useState } from "react";

export const Statistics = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const handleClick1 = () => {
    setIsActive1(true);
    setIsActive2(false); 
  };

  const handleClick2 = () => {
    setIsActive2(true);
    setIsActive1(false); 
  };

  return (
    <div className={style.container}>
      <div className={style.containerUl}>
        <ul className={style.ulText}>
          <li className={style.liText}>
            <Link
              className={isActive1 ? `${style.link} ${style.active}` : style.link}
              to={"example"}
              onClick={handleClick1}
            >
              Граффик пользователей
            </Link>
          </li>

          <li className={style.liText}>
            <Link
              className={isActive2 ? `${style.link} ${style.active}` : style.link}
              to={"radialExample"}
              onClick={handleClick2}
            >
              Граффик возраста
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.containerGrapf}>
        { !isActive1 && !isActive2 ? <h2 style={{textAlign: 'center', marginTop: '300px'}}>Выберете график</h2>  : <Outlet/> }
      </div>
    </div>
  );
};
