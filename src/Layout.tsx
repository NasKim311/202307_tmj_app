import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from 'components/navBar/NavBar';
import SideBar from 'components/sideBar/SideBar';

import Home from 'components/home/Home';
import {ProtectedRoute} from "core/route.protected";
import {PublicRoute} from "core/route.public";
import Loading from "Loading";
import NoPage from 'components/NoPage';

const Login = lazy(() => {
    return Promise.all([ 
      import('./components/login/Login') , 
      new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
})

class Layout extends React.Component{

  constructor(props : any){
    super(props);

    for(let i = 0 ; i < document.body.classList.length ; i++){
      document.body.classList.remove(document.body.classList[0]);
    }
    document.body.style.minHeight = null;
  
    document.body.classList.add("sidebar-mini");
    document.body.classList.add("layout-fixed");
    document.body.classList.add("layout-navbar-fixed");
  }
  
  public render() {
    
    return (
      <div className="wrapper wrapper-list">
        <NavBar />

        <div className="">
          <Routes>
            <Route path='/index.html' element={<Home/>}></Route>
            <Route path='/' element={<Home/>}></Route>     

            <Route path='/sideBar' element={<SideBar/>}></Route>        
            
            <Route path='/login' element={
              <PublicRoute>
                <React.Suspense fallback={<Loading/>}><Login/></React.Suspense> 
                </PublicRoute> 
            }></Route>

            <Route path='*' element={<NoPage/>}></Route>   
        </Routes>
        </div>
        
       </div>
        
      );
    
  }

}

export default Layout;
