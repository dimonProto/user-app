import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";
import UserEdit from "./pages/UserEdit";
import NotFound from "./pages/NotFound";
import WithUserList from "./decorators/WithUserList";
import WithUserDetail from "./decorators/WithUserDetail";
import WithUserCreate from "./decorators/WithUserCreate";


function App(props) {

  return (
    <div>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/users'} element={<WithUserList/>}/>
                    <Route path={'/user/:id'} element={<WithUserDetail/>}/>
                    <Route path={'/user/edit/:id'} element={<UserEdit {...props}/>}/>
                    <Route path={'/user/create'} element={<WithUserCreate/>}/>
                    <Route path={'/'} element={<Navigate replace to={'/users'} />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
