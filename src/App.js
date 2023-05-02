import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Register from './page/Register'
import Home from "./page/Home";
import Login from "./page/Login";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
function App() {
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser)
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home/>}></Route>
                        <Route path='login' element={<Login/>}/>
                        <Route path='register' element={<Register/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
