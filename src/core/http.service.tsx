import axios from 'core/axios.service';

export type httpCallback = { req : Promise<any> , cancel : AbortController }
const apiBase = process.env.REACT_APP_API_URL;

class Http {

  private getOption(headers? : any , params? : any) : any{
    const controller = new AbortController();

    let result = {};
    if (headers){
      result = Object.assign(headers , result);
    }
    
    if (params){
      result["params"] = JSON.parse(JSON.stringify(params));
    }

    result["signal"] = controller.signal;

    return {header : result , controller : controller};
  }

  public get(uri : string, params? : any , headers? : any ) : httpCallback {
    try {
      let opt = this.getOption(headers , params);
      //console.log("options",opt);
      return {req : axios.get(apiBase + uri , opt.header ) , cancel : opt.controller}
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public post(uri : string, data : any , headers? : any ) : httpCallback {
    try {
      let opt = this.getOption(headers , null);
      //console.log("options",opt);
      return {req : axios.post(apiBase + uri , {header : opt.header , data : data} ) , cancel : opt.controller}
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public put(uri : string, data : any , headers? : any ) : httpCallback {
    try {
      let opt = this.getOption(headers , null);
      console.log("options",opt);
      return {req : axios.put(apiBase + uri , {header : opt.header , data : data} ) , cancel : opt.controller}
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public delete(uri : string, headers? : any ) : httpCallback {
    try {
      let opt = this.getOption(headers , null);
      //console.log("options",opt);
      return {req : axios.delete(apiBase + uri , {header : opt.header } ) , cancel : opt.controller}
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  
}

let http;
export default http = new Http();



