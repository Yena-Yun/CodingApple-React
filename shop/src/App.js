/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import data from "./data";
import { Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
import Navbar from "./ElNavbar";

export const 재고context = React.createContext();

function App() {
  const [shoes, shoes변경] = useState(data);
  const [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <재고context.Provider value={재고}>
      {/* 상단 navbar 헤더 */}
      <Navbar />

      {/* Switch: 정확히 일치하는 Route만 보여주는 기능 (스위치 껐다 켰다 하는 느낌, '택일'하기) */}
      <Switch>
        {/* (Switch 있어도 Home 경로에 exact는 있어야 함) */}
        <Route exact path="/">
          <Home shoes={shoes} setShoes={shoes변경} 재고={재고} />
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>
      </Switch>
    </재고context.Provider>
  );
}

export default App;
