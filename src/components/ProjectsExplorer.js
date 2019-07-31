import React from 'react';
import Projects from './Projects';

class ProjectExplorer extends React.Component {
    state={
      searchCriteria: '',
    }

    onSearch=(e) => {
      this.setState({
        searchCriteria: e.target.value,
      });
    }

    render() {
      return (
        <div>
          <div style={styles.searchSection}>
           
            <button style={styles.addProjectButton} onClick={this.props.openModal}>Add project</button>
            <input style={styles.searchInput} onChange={this.onSearch} placeholder=" Search by Title" />
          </div>
          <Projects searchCriteria={this.state.searchCriteria} />
        </div>);
    }
}


const styles={
    searchSection:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      backgroundColor:"white",
      border: '1px solid black', 
      left:0,
      right:0,
      top:0,
      height:80,
      position:"fixed",
      },
      addProjectButton:{ 
      border: '1px solid black', 
      backgroundColor: '#DCD0CE',
      height:25,
      alignSelf:"center",
      fontWeight:"bold"
     },
     searchInput:{ 
            marginLeft: 15, 
            height:25,
            alignSelf:"center",
            border: '1px solid black', 
          
           
     }
}

export default ProjectExplorer;
