import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import { Home } from './Home';
import { Getuser } from './getusers';
import { Edituser } from './useredit';
import { Signin } from './signin';
import { Adminlogin } from './admin';
import { Dash } from './Dasboard';

function App() {
  return (
    <div className="App">
<BrowserRouter>

<Routes>
<Route path="/" element={<Signin/>}></Route>
  <Route path='/home' element={<Home/>}>
  </Route>

  <Route path='/users' element={<Getuser/>}>

  </Route>
  <Route path='/edituser/:id' element={<Edituser/>}>


</Route>
<Route path='/dash' element={<Dash/>}></Route>
<Route path='/admin' element={<Adminlogin/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
