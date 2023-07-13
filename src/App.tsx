import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from './core/route.public'; 

import NoPage from './components/NoPage';
import Layout from "./Layout";
const Login = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "LoginComponent" */ './components/login/Login') , 
    new Promise(resolve => setTimeout(resolve, 300))  // lazy test 
])
.then(([moduleExports]) => moduleExports);
})
import Loading from "./Loading";

class App extends React.Component{

  public render() {
  
    return (
        <Routes>
          
          <Route path='/404' element={<NoPage/>}></Route>   

          <Route path='/login' element={
            <PublicRoute>
              <React.Suspense fallback={<Loading/>}><Login/></React.Suspense> 
              </PublicRoute> 
          }></Route>

          <Route  path="*" element={<Layout />} />

          
      </Routes>
    );
  }

}

export default App;
