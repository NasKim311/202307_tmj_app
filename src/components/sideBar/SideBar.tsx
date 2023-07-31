import React from 'react';

import {withRouter} from "core/withRouter";

import SideBarV from "./SideBar.v";

class PageState {
  isOpen: boolean = false;
  xPosition: number = 280;
  
}

class SideBar extends React.Component{

  public state = new PageState(); // state = 예약변수명 , react state 용도로만 사용해야함

  constructor(props : any){
    super(props);

    // this.signOut = this.signOut.bind(this);
  }

  public componentDidMount() : void {
  }

  public render() {

      const props = {
        state : this.state ,
      }

      return (
        <SideBarV {...props}></SideBarV>
      );
  }

}

export default withRouter(SideBar);