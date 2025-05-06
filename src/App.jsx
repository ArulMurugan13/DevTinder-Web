import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./component/Login";
import Profile from "./component/Profile";



function App() {
  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
    
        <Route path="/" element={<Body/>}>
          <Route path="/login" element={<Login/>}></Route>
          <Route path ="/profile" element={<Profile/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
