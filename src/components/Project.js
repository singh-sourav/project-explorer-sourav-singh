import React from "react";
class Project extends React.Component {

    render() {
        return (
            <div style={{border: '2px solid black',padding:10,margin:10,width:200}}>
             <h1>{this.props.title}</h1>
             <p>{this.props.description}</p>
             <h5 style={{color:"grey"}}>{this.props.timestamp}</h5>
            </div>);
    }
}

export default Project;

