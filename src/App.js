import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Account from "./components/Account";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-center text-3xl font-bold">Revolt best laps</h1>
      </div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </>
  );
}

export default App;
