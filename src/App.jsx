import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./component/Login";
import Profile from "./component/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./component/Feed";
import Connections from "./component/Connections";
import Requests from "./component/Requests";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/connections" element={<Connections />}></Route>
              <Route path="/requests" element={<Requests/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
