import Login from "./pages/Login/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import LoginProvider from "./context/LoginContext";
import PrivateRouter from "./context/PrivateRouter";
import About from "./pages/About/About";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Details from "./pages/Details/Details";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/" element={<PrivateRouter />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/details" element={<Details/>} />

            </Route>
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </div>
  );
}

export default App;
