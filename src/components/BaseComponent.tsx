import React, {useEffect} from 'react';



export default class BaseComponent extends React.Component {

    protected useEffect = useEffect;

    private pageServices = [];
    public setServices(list : any[]) : void{
        this.pageServices = list;

    }

    public componentWillUnmount() : void {

        console.log("BaseComponent.componentWillUnmount");

        if (this.pageServices && this.pageServices.length > 0){

            for(let service of this.pageServices){
                service.cancel();
            }

        }

        /*
        
        // 사용한 서비스를 cancel 한다. request cancel
        userService.cancel();
        eventService.cancel();*/
    }

    public handleChange(e : any) : void{
        
        //console.log(e , e.target.type);

        if (e.target.type == "checkbox"){

            console.log(e.target.name, e.target.checked, e.target.value);

            this.setState({
                [e.target.name]: e.target.checked
            });
            
        }else{
            //console.log("handleChange",e.target.name , e.target.value);

            const depth = e.target.name.split(".").length;

            if (depth == 3){
                
                let container = e.target.name.split(".")[0];
                let group = e.target.name.split(".")[1];
                let key = e.target.name.split(".")[2];

                //Input 이 배열 일 경우 예 : package.keywords[10].name
                let indexMetch = group.match(/\[(\d+)\]/);
                let index = null;
                if(indexMetch) {
                    index = indexMetch[1];
                    group = group.split('[')[0];
            
                    let newObj = this.state[container][group];

                    newObj[index][key] = e.target.value;

                    console.log(group, key, index, this.state[container][group][index]);

                    this.setState({
                        [container[group[index[key]]]] : newObj
                    });

                } else {
                    let newContainer = this.state[container];
    
                    let newObj = newContainer[group];
    
                    newObj[key] = e.target.value;
    
                    this.setState({
                        [container] : newContainer
                    });
                }
               

            }else if (depth == 2){

                let group = e.target.name.split(".")[0];

                //Input 이 배열 일 경우 예 : items[10].name
                let indexMetch = group.match(/\[(\d+)\]/);
                let index = null;
                if(indexMetch) {
                    index = indexMetch[1];
                    group = group.split('[')[0];

                    let key = e.target.name.split(".")[1];
               
                    let newObj = this.state[group][index];

                    newObj[key] = e.target.value;

                    this.setState({
                        [group[index]] : newObj
                    });

                } else {

                    let key = e.target.name.split(".")[1];
                    let newObj = this.state[group];

                    newObj[key] = e.target.value;

                    this.setState({
                        [group] : newObj
                    });

                }

            }else{
                this.setState({
                    [e.target.name]: e.target.value
                });
            }

            
        }
        
        
      }; 

      public handleApiError(e : any) : void{

        if (e.code == "ERR_CANCELED" /*사용자 요청 취소*/ || (e.code == "ERR_BAD_REQUEST" && e.response.status == 401)/*401*/){      // 
            return;
        } 
        
        alert(e.response.data.error);

      }


}

