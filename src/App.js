import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";
import UserEdit from "./pages/UserEdit";
import NotFound from "./pages/NotFound";
import UserList from "./pages/UserList";
import WithUser from "./decorators/WithUser";
import UserDetail from "./pages/UserDetail";
import UserCreate from "./pages/UserCreate";


function App(props) {

  return (
    <div>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/users'} element={
                        <WithUser>
                            <UserList/>
                        </WithUser>
                    }/>
                    <Route path={'/user/:id'} element={
                        <WithUser>
                            <UserDetail/>
                        </WithUser>
                    }/>
                    <Route path={'/user/edit/:id'} element={<UserEdit />}/>
                    <Route path={'/user/create'} element={
                        <WithUser>
                            <UserCreate/>
                        </WithUser>
                    }/>
                    <Route path={'/'} element={<Navigate replace to={'/users'} />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
