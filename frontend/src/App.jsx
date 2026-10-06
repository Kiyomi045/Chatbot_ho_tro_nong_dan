import { useState } from "react";
import { Routes, Route } from "react-router";
import { pageRoute } from "./route";

function App() {
  return (
    <Routes>
      {pageRoute.map((route, i) => {
        console.log(route);
        const Page = route.component;

        return <Route key={i} path={route.path} element={<Page />}></Route>;
      })}
    </Routes>
  );
}

export default App;
