import React from 'react';

import {withRouter} from "core/withRouter";

import NavBarV from "./NavBar.v"; 
import BaseComponent from 'components/BaseComponent';

class PageState {
  error: string = null;
  isLoaded:boolean = false;
  isShowSidebar: boolean = false;
  
};

class NavBar extends BaseComponent{
  public state = new PageState();

  constructor(props : any){
    super(props);

    this.showSidebar = this.showSidebar.bind(this);
  } 

  public componentDidMount() : void {
  }

  public showSidebar() {
    this.setState({
      isShowSidebar: !this.state.isShowSidebar,
    });
  }

  public render() {
    const props = {
      state : this.state ,
      showSidebar : this.showSidebar ,
    }
    
    return (
      <NavBarV {...props}></NavBarV>
    );
  }

}

export default withRouter(NavBar);