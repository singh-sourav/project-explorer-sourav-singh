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
};
}

handleTitleChange=(e) => {
  this.setState({
    titleInput: e.target.value,
  });
}

handleDescriptionChange=(e) => {
  this.setState({
    titleDescription: e.target.value,
  });
}

submitData=() => {
    this.props.addProjectToServer(this.state.titleInput, this.state.titleDescription);
}


render() {
    return (

    <Modal
        isOpen={this.props.isModalOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <div style={{ display: 'flex', flexDirection: 'column', padding: 50 }}>
        <h1>Add Project</h1>
        <label>Project Title</label>
        <br />
        <textarea rows="4" cols="50" onChange={this.handleTitleChange} placeholder="Enter Title" />
        <br />
        <br />
        <label>Project Description</label>
        <br />
        <textarea rows="10" cols="50" onChange={this.handleDescriptionChange} placeholder="Enter Description" />
        <button
            onClick={this.submitData}
            style={{
            marginBottom: 20, marginTop: 20, border: '1px solid black', backgroundColor: '#DCD0CE',
            }}
        >
        ADD PROJECT
        </button>
        <button onClick={this.props.closeModal} style={{ border: '1px solid black', backgroundColor: '#DCD0CE' }}>CLOSE</button>
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

const customStyles = {
  content: {
    top: '50%',
    height: '80%',
    width: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
