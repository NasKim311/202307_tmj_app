import qs from 'qs';
import axios from 'core/axios.service';
import http from 'core/http.service';
import BaseService from "services/BaseService";

class AuthService extends BaseService {

    public getResourceToken() : Promise<any> {
        return super.request(http.get("/auth/resource-token"));
    }


    public async signIn(username: string, password: string) : Promise<any> {
        const uri = "/admin-api/auth";
        
        const data = { 
            'username': username  , 
            'password': password  , 
        };

        const options = {
            method: 'POST',
            headers: { 
                'content-type': 'application/x-www-form-urlencoded; charset=utf-8'  , 
            },
            data: qs.stringify(data),
            url : uri,
        };

        try{
            let data = await axios(options);
          
            let token = data;
          
            this.saveToken(token);
            return token;
        }catch(err){
            console.log("err" , err);
            throw err;
        }
    }

    public async signOut(forceServer? : boolean) : Promise<boolean>{
        if (forceServer){
            await axios.delete('/admin-api/auth/revoke');
        }
        this.removeToken();

        return true;
    }

    public refreshToken() : Promise<any> {
        let token = this.getToken();

        const uri = "/admin-api/auth";
        
        const data = { 
            'grant_type': 'refresh_token'  , 
            'username': token.username  , 
            'refresh_token': token.refresh_token  , 
        }; 

        const options = {
            method: 'POST',
            headers: { 
                'content-type': 'application/x-www-form-urlencoded; charset=utf-8' 
            },
            data: qs.stringify(data),
            url : uri,
        };

        return axios(options);
    }

    public removeToken() {
        localStorage.removeItem('token');
    }

    public getToken() {
        if(localStorage.getItem('token')){
            return JSON.parse(localStorage.getItem('token'));
        }else {
            return ""; 
        }
    }

    public saveToken(token) {
        localStorage.setItem('token', JSON.stringify(token));
    }
    
    public getClientId() : string{
        return this.getRememberMe() ? "longappclient" : "appclient";
    }

    public setRememberMe(arg : boolean) : void{
        localStorage.setItem("rememberMe" , arg ? "Y" : "N");
    }
        
    public getRememberMe() : boolean{
        let arg = localStorage.getItem("rememberMe");
        return (!arg || arg == "N") ? false : true;
    }

    public getUserId() : string{
        let username : string = "";
        if(localStorage.getItem("token")){
            username = JSON.parse(localStorage.getItem("token")).username;
        }
        return username;
    }

    public setUserId(save : boolean, username? : string) : void{
        if(save){
            localStorage.setItem("userId", username);
        }else{
            localStorage.removeItem('userId');
        }
    }

}

let authService;
export default authService = new AuthService();