import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button";
import style from "./index.module.css";
import { fetchUsers, userActions } from "../../store/usersSlice";

const FilterUsers = () => {
  const filterName = useSelector((state) => state.users.filterName);
  const filterValue = useSelector((state) => state.users.filterValue);
  const dispatch = useDispatch();


  const handleFilterChange = (e) => {
    dispatch(userActions.setFilterName(e.target.value));
  };

  const handleClear = () => {
    dispatch(userActions.setFilterValue(""));
    dispatch(fetchUsers());
  };

  const handleFilterValue = (e) => {
    dispatch(userActions.setFilterValue(e.target.value));
  };

  const handleFilterSubmit = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className={style.filterContainer}>
      <select
        className={style.select}
        onChange={handleFilterChange}
        value={filterName}
      >
        <option value="name">Имя</option>
        <option value="surname">Фамилия</option>
        <option value="email">Почта</option>
      </select>
      <input
        className={style.input}
        type="text"
        value={filterValue}
        onChange={handleFilterValue}
        placeholder={filterName}
      />
      <Button onClick={handleFilterSubmit}>Искать</Button>
      <Button onClick={handleClear}>Очистить</Button>
    </div>
  );
};

export default FilterUsers;
