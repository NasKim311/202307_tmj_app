import React from 'react';

import {withRouter} from "core/withRouter";

import NavBarV from "./NavBar.v"; 

import { NavLink } from 'react-router-dom';
import BaseComponent from 'components/BaseComponent';
import authService from "services/auth.service";

class PageState {
  error: string = null;
  isLoaded:boolean = false;
};

class NavBar extends React.Component{
  public state = new PageState();

  constructor(props : any){
    super(props);
  } 

  public componentDidMount() : void {
  }


  public render() {
    const props = {
      state : this.state ,
    }
    
    return (
      <NavBarV {...props}></NavBarV>
    );
  }

}

export default withRouter(NavBar);