import "./style/base.css"
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Dashoard from "./pages/Dashboard"

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Toaster/>
            <Login />
          </>
        }>
        </Route>
        <Route path="/dashboard" element={
          <>
            <Dashoard />
          </>
        }>

        </Route>
      </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
