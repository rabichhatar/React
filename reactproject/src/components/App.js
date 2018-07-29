// Component is a Derived class of Component Class (From React)
import React, {Component} from "react";
import {Friends, AddFriend} from "./Example";

class App extends Component {

    state = {
        cmpHeading: "My React App", 
        friendsData1:["Sunil","Chandan","Sushanta"],
        friendsData2:["Subir","Itishree","Sushanta"]
    }

    render = () => {
        return <div>
            <h1>{this.state.cmpHeading}</h1>
            <AddFriend addNew={this.addNewFriend}/><br/>
            <Friends names={this.state.friendsData1}/>
            <hr/>
            <Friends names={this.state.friendsData2}/>
        </div>;
    }

    addNewFriend = (friendName) => {
        console.log("Submitting data to App...",friendName);
        this.setState({friendsData1:[...this.state.friendsData1, friendName]}); // Spread operator for array ES6
    }
}

export default App;