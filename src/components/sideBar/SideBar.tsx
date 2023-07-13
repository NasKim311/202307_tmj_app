import React from 'react';
import { NavLink } from 'react-router-dom';
import BaseComponent from 'components/BaseComponent';
import authService from 'services/auth.service';
import {withRouter} from 'core/withRouter';

class SideBar extends BaseComponent{

  constructor(props : any){
    super(props);

    this.signOut = this.signOut.bind(this);


  }

  public componentDidMount() : void {
    if (authService.getToken()){
      
      const params = new URLSearchParams(location.search);
      const redirect = params.get("r");
      if (redirect){

        setTimeout(()=>{
          (this.props as any).navigate(redirect,{replace:true});
        },300)


      }
      
    }else{
      setTimeout(()=>{
        (this.props as any).navigate("/login",{replace:true});
      },300)
    }
  }

  public async signOut() : Promise<void>{
    
    await authService.signOut(true);
    (this.props as any).navigate("/login",{replace:true});

}

  public render() {
    
      let userid = authService.getUserId();

      return (
          
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

        <a href="#" className="brand-link">
          <span className="brand-text font-weight-light">LECIRT TMS</span>
        </a>

        <div className="sidebar">
          
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          
            <div className="info">
              <a className="d-block">{userid}
              &nbsp;
              <button onClick={this.signOut} className="nav-icon fas">logout</button>
              </a>
              
            </div>
          </div>

          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
              
            <li className="nav-item">
                <NavLink to='/admin' className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    관리자 관리
                    
                  </p>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/package" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    패키지 관리
                    
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/trip' className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    
                    투어 관리
                    
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                 <NavLink to='/pickup' className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>
                      픽업지 관리
                    </p>
                  </NavLink>    
              </li>
              <li className="nav-item">
                <NavLink to='/order' className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    예약 관리
                    
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/vehicle' className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    차량 관리
                  </p>
                </NavLink>    
              </li>
              <li className="nav-item">
                 <NavLink to='/guide' className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>
                      가이드 관리
                      
                    </p>
                  </NavLink>    
              </li>
            </ul>
          </nav>
        
        </div>
        
      </aside>

      );
  }

}

export default withRouter(SideBar);