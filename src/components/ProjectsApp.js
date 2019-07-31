import React from "react";
import ProjectExplorer from "./ProjectsExplorer";
import AddProject from "./AddProject";
class ProjectsApp extends React.Component {

    state={
        isModalOpen:false
    }

    openModal=()=>{
        this.setState({
            isModalOpen:true,
        })
    }

    closeModal=()=>{
        this.setState({
            isModalOpen:false,
        })
    }

    render() {
        return (
            <div style={{display:"flex",flexDirection:"column"}}>
               <ProjectExplorer openModal={this.openModal} closeModal={this.closeModal}/>
               <AddProject isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}/>
            </div>);
    }



}



export default ProjectsApp;

