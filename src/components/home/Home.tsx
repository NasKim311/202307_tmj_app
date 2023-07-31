import React from "react";

import {withRouter} from "core/withRouter";

import BaseComponent from "components/BaseComponent";

import HomeV from "./Home.v"

class PageState {
    subTitle: string = '세계맛집 정복을 위하여';
    
};

class Home extends BaseComponent {
    public state = new PageState();

    public render() {
    
        const props = {
            state : this.state  , 
        }

        return (
            <HomeV {...props}></HomeV>
        );

    }

}

export default withRouter(Home);