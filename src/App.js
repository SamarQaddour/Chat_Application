import './App.css';
import {Route,Routes,BrowserRouter,Navigate} from 'react-router-dom'
import Register from './page/Register'
import Home from "./page/Home";
import Login from "./page/Login";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
function App() {
    const {currentUser} = useContext(AuthContext)
    const ProtectedRoute = ({children}) =>{
        if(!currentUser){
            return <Navigate to='/Login' />
        }
        return children
    }
    console.log(currentUser)
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<ProtectedRoute>
                            <Home/>
                        </ProtectedRoute>}></Route>
                        <Route path='login' element={<Login/> }/>
                        <Route path='Register' element={<Register/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
