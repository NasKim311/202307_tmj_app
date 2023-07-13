import { httpCallback } from 'core/http.service';

export default class BaseService {

    public reqs = [];
    public cancel() : void{

        for(let req of this.reqs){
            req.cancel.abort();
        }

        this.reqs = [];
    }

    public request(callback : httpCallback) : Promise<any>{
        this.reqs.push(callback);
        return callback.req;
    }

}