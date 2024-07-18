import React, {Component} from "react";

class Hooks extends React.Component {
constructor(props) {
    super(props);
    this.state = {count:0}
}

render(){
    return(
        <div> 
            <p>You Pressed{this.state.count}times</p>
            <button onClick={()=> this.setState({count:this.state.count+1})}> Press Me</button>
        </div>
    )
}
}
export default Hooks