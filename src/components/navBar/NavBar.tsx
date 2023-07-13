import React from 'react';
import { NavLink } from 'react-router-dom';
import BaseComponent from 'components/BaseComponent';
import authService from "services/auth.service";

class PageState {
  error: string = null;
  isLoaded:boolean = false;
  data: any;

  cnt : number = 0;
  
};

class NavBar extends React.Component{

  public state = new PageState();

  constructor(props : any){
    super(props);

    
    this.getData = this.getData.bind(this);
  // #api , 페이지 unload 시 응답받지 못한 req 를 취소하기 위해 api 서비스 등록
  //super.setServices([authService , dashboardService]);

  } 

  public componentDidMount() : void {

    if (authService.getToken() == ""){

      this.setState({isLoaded:true});

    }else{
      this.getData();
    }
  }

  public async getData() : Promise<any>{

    // await dashboardService.get().then(p => {
        
    //     console.log(p);
    //     this.setState({
    //         error : null , 
    //         isLoaded: true,
    //         data: p ,
    //         cnt : p.parseFailCnt + p.packageMappingFailCnt + p.tripMappingFailCnt + p.crawlingFailCnt
    //         });

    // }).catch(e => {
        
    //     this.setState({
    //         isLoaded: true,
    //         error : e
    //         });
        
    //   //  super.handleApiError(e);
    // })



}

  public render() {
      
      return (
          
          <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
            </li>
          </ul>
  
          <ul className="navbar-nav ml-auto">
          { this.state.isLoaded && this.state.error == null && this.state.cnt > 0 && (
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-bell"></i>
                    <span className="badge badge-warning navbar-badge">{this.state.cnt}</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-header">{this.state.cnt} Notifications</span>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">
                        <i className="fas fa-envelope mr-2"></i> 예약 이메일 파싱 실패
                        <span className="float-right text-muted text-sm">{this.state.data.parseFailCnt} 건</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">
                        <i className="fas fa-users mr-2"></i> 패키지 연결 실패 주문
                        <span className="float-right text-muted text-sm">{this.state.data.packageMappingFailCnt} 건</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">
                        <i className="fas fa-users mr-2"></i> 투어 연결 실패 주문
                        <span className="float-right text-muted text-sm">{this.state.data.tripMappingFailCnt} 건</span>
                    </a>
                    
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">
                        <i className="fas fa-file mr-2"></i> 크롤링 실패 주문(kkday)
                        <span className="float-right text-muted text-sm">{this.state.data.crawlingFailCnt} 건</span>
                    </a>
                </div>

            </li>
            )}
          </ul>
        </nav>

      );
  }

}

export default NavBar;