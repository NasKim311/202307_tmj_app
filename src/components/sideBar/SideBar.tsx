import React from 'react';

import {withRouter} from "core/withRouter";

import SideBarV from "./SideBar.v";

import { NavLink } from 'react-router-dom';
import BaseComponent from 'components/BaseComponent';
import authService from 'services/auth.service';

class PageState {
  isOpen: boolean = false;
}

class SideBar extends BaseComponent{

  public state = new PageState(); // state = 예약변수명 , react state 용도로만 사용해야함

  constructor(props : any){
    super(props);

    // this.signOut = this.signOut.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  public toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

//   public componentDidMount() : void {
//     if (authService.getToken()){
//       const params = new URLSearchParams(location.search);
//       const redirect = params.get("r");
//       if (redirect){
//         setTimeout(()=>{
//           (this.props as any).navigate(redirect,{replace:true});
//         },300)
//       }
//     }else{
//       setTimeout(()=>{
//         (this.props as any).navigate("/login",{replace:true});
//       },300)
//     }
//   }

//   public async signOut() : Promise<void>{
//     await authService.signOut(true);
//     (this.props as any).navigate("/login",{replace:true});
// }

  public render() {
      // let userid = authService.getUserId();

      const props = {
        state : this.state ,
        toggleMenu : this.toggleMenu , 
      }

      return (
        <SideBarV {...props}></SideBarV>
      );
  }

}

export default withRouter(SideBar);