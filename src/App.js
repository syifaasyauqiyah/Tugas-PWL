import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Calculator from "./pages/Calculator";


function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />}/>
      <Route exact path={"/calculator"} element={<Calculator />} />
    </Routes>
  );
}

export default App;