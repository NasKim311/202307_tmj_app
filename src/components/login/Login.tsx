import React from 'react';

import {withRouter} from 'core/withRouter';
import authService from 'services/auth.service';

import BaseComponent from 'components/BaseComponent';

import LoginV from './Login.v';

declare var $: any;

class PageState {
    username:string = '';
    password:string = '';
    isRememberMe:boolean = true;
    isSaveId :boolean = false 
  };

class Login extends BaseComponent {

    public state = new PageState();
 
    constructor(props : any){
        super(props);
        
        document.body.classList.add("login-page");
        document.body.style.minHeight = "495.6px";

        this.state.isRememberMe = authService.getRememberMe();

        let userId = localStorage.getItem("userId");
        if (userId){
            this.state.username = userId;

            if(this.state.username){ 
                this.state.isSaveId = true;
            }
        }
        this.signIn = this.signIn.bind(this);

        this.handleChange = super.handleChange.bind(this);
    }

    public componentDidMount(): void {
        $('#root').css('width', '');
    }

    public componentWillUnmount(): void {
        $('#root').css('width', '100%');
    }

    public signIn(e : any) : void{
        e.preventDefault(); //추가: 원래 해야될 작업을 안하게 해주는 함수
 
        authService.setRememberMe(this.state.isRememberMe);

        authService.setUserId(this.state.isSaveId , this.state.username);

        try{
            authService.signIn(this.state.username , this.state.password).then(token => {
                // redirect
                // withRouter 로 감싸줘야 동작함
                (this.props as any).navigate("/",{replace:true});
            }).catch(e => {
                super.handleApiError(e);
            })
        }catch(e){
            console.log("signIn error",e);
        }
    }

    public render() {
        const props = {
            state : this.state  , 
            signIn : this.signIn , 
            handleChange : this.handleChange , 
        }
        // return <VAC data={props} />;
        return (
            <LoginV {...props}></LoginV>
        );
    }
    
}

export default withRouter(Login);