import "./style/base.css"
import "./style/utility.css"

import { Toaster } from "react-hot-toast";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import PopupList from "./pages/PopupList"
import Popup from "./pages/Popup";
import Libarary from "./pages/Libarary";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import PopupEdit from "./pages/PopupEdit";
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Toaster/>
            <Login />
          </>
        }>
        </Route>
        <Route path="/PopupList" element={
          <>
            <Sidebar />
            <PopupList />
          </>
        }>
        </Route>
        <Route path="/popup" element={
          <>
            <Sidebar />
            <Popup />
          </>
        }>
        </Route>
        <Route path="/libarary" element={
          <>
            <Sidebar />
            <Libarary />
          </>
        }>
        </Route>
        <Route path="/settings" element={
          <>
            <Sidebar />
            <Settings />
          </>
        }>
        </Route>
        <Route path={`/PopupList/popup/:PopupId`}element={
          <>
            <Sidebar />
            <Libarary />
            <PopupEdit />
          </>
        }>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
