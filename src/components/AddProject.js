import React from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProjectToServer } from '../actions/project';

class AddProject extends React.Component {

constructor(props) {
super(props);
this.state = {
    titleInput: '',
    titleDescription: '',
    validationError:false,
};
}

handleTitleChange=(e) => {
  this.setState({
    titleInput: e.target.value,
    validationError:false
  });
}

handleDescriptionChange=(e) => {
  this.setState({
    titleDescription: e.target.value,
    validationError:false
  });
}

submitData=() => {
   
if(this.state.titleDescription===""||this.state.titleInput===""){
  this.setState({
    validationError: true,
  })
}
else
    this.props.addProjectToServer(this.state.titleInput, this.state.titleDescription,this.props.closeModal);
}


render() {
    return (

    <Modal
        isOpen={this.props.isModalOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
    >
        <div style={styles.modalChild}>
        <h1>Add Project</h1>
        <label>Project Title</label>
        <br />
        <textarea rows="4" cols="50" onChange={this.handleTitleChange} placeholder="Enter Title" />
        <br /><br />
        <label>Project Description</label>
        <br />
        <textarea rows="10" cols="50" onChange={this.handleDescriptionChange} placeholder="Enter Description" />
        <div style={styles.buttonList}>
        <button onClick={this.submitData} style={styles.addProjectButton}>+ ADD PROJECT</button>
        <button onClick={this.props.closeModal} style={styles.closeButton}>CLOSE</button>
       
        </div>
       {this.state.validationError && <p style={{textAlign:"center", color:"red"}}>**No fields can be empty</p>}
        </div>
    </Modal>
    );
}
}

const mapStateToProps = state => ({
  projects: state.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addProjectToServer,
  },
  dispatch,
);

const styles={

    modalChild:{ 
        display: 'flex', 
        flexDirection: 'column', 
        padding: 50 
    },
    buttonList:{ 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: "space-evenly" ,
      height:30,
      marginTop:10,
  },
    addProjectButton:{
        border: '1px solid black', 
        backgroundColor: 'darkgreen',
        fontWeight:"bold",
        color:"white"
        },
    closeButton:{
        border: '1px solid black',
        fontWeight:"bold",
        backgroundColor: 'darkred',
        color:"white"
        }


}

const customStyles = {
  content: {
   
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
