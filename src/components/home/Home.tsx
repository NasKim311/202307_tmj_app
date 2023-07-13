import React from "react";

import {withRouter} from "core/withRouter";

import BaseComponent from "components/BaseComponent";

import HomeV from "./Home.v"

class PageState {
    
};

class Home extends BaseComponent {

    public render() {
    
        const props = {
            state : this.state  , 
            // signIn : this.signIn , 
            // handleChange : this.handleChange , 
        }

        // return <VAC data={props} />;
        return (
            <HomeV {...props}></HomeV>
        );

    }


}

export default withRouter(Home);