import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/index.jsx";
import UsersPage from "./users/index.jsx";
import "./App.css";
import Layout from "./components/layout/Layout.jsx";
import { FormAdd } from "./components/form/formAdd/index.jsx";
import { FormUserUpdate } from "./components/form/formUserUpdate/index.jsx";
import Example from "./components/static/digramma2/index.jsx";
import RadialBarChartExample from "./components/static/diogramma/index.jsx";
import { Statistics } from "./statistics/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="statistics/*" element={<Statistics />} >
        <Route path="example" element={<Example />} />
        <Route path="radialExample" element={<RadialBarChartExample />}/>

        </Route>
        <Route path="users" element={<UsersPage />} />
        <Route path="users/add" exact element={<FormAdd />} />
        <Route path="users/:id" element={<FormUserUpdate />} />
      </Route>
    </Routes>
  );
}

export default App;
