import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import UserList from "./pages/UserList";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";
import UserDetail from "./pages/UserDetail";
import UserEdit from "./pages/UserEdit";
import UserCreate from "./pages/UserCreate";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <div>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact  path={'/user'} element={<UserList/>}/>
                    <Route exact  path={'/user/detail'} element={<UserDetail/>}/>
                    <Route exact  path={'/user/edit'} element={<UserEdit/>}/>
                    <Route exact  path={'/user/create'} element={<UserCreate/>}/>
                    <Route path={'/'} element={<Navigate replace to={'/user'} />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
