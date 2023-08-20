import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginView } from './containers/LoginView';

const App = ()=>{
  return(
    <div className="App">
      <Routes>
        <Route path="/mcnp/login" element={<LoginView view="로그인"/>}/>
        <Route path="/mcnp/sign-up" element={<LoginView view="회원가입"/>}/>
      </Routes>
    </div>
  )
}

export default App;