import React, {Component} from "react";

export class Friends extends Component {

    render() {
        // console.log(this.props.names);
        
        let output = this.props.names.map((e,i) => {
            return <li key={i}>{e}</li>;
        });

        return <div>
            <h2>List of Friends</h2>
            <ul>{output}</ul>
        </div>
    }
}

export class AddFriend extends Component {

    state = {newFriend:"Guest"};

    render() {

        return <div>
            <input type="text" name="name" placeholder="Enter Friend Name" 
                value={this.state.newFriend} onChange={this.handleOnChange}/>
            <button onClick={this.handleAddNew}>Add Friend</button>
        </div>;
    }

    handleOnChange = (event) => {
        console.log("On Change Handle Function...", event.target.value);
        // this.state.newFriend = event.target.value;
        this.setState({newFriend:event.target.value});
    }

    handleAddNew = () => {
        this.props.addNew(this.state.newFriend);
    }

}