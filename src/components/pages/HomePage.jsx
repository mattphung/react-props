import React, { Component } from 'react';
import TextList from "../controls/TextList";

class HomePage extends Component {

    state = { value : ""}

    constructor(props){
        super(props);

        //this.state = { value : ""}

        this.handlesTextListChange = this.handlesTextListChange.bind(this);
    }

    handlesTextListChange(value) {
        //alert(value);
        this.setState({value});
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Home Page</h1>
                <p>Example of props</p>
                <TextList id="computerList" 
                onChange={this.handlesTextListChange} 
                value={this.state.value} 
                rows={40} 
                cols={20}/>

                <p>{this.state.value}</p>
            </React.Fragment>
         );
    }
}
 
export default HomePage;