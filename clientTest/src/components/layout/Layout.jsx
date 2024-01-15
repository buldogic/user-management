import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

const Layout = () => {
  return (
    <>
      <div className="container">
        <header className="header-container">
          <span className="header-name-page">
            <NavLink className='header-text ' to="/">Главная страница</NavLink>
          </span>
          <span className="header-name-page">
            <NavLink className='header-text ' to="statistics">Статистика</NavLink>
          </span>
          <span className="header-name-page">
            <NavLink className='header-text' to="users">Пользователи</NavLink>
          </span>
        </header>
        <div className="main-container">
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
