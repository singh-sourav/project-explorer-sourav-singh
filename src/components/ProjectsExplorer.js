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
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        padding: 50, 
        height: 30, 
        marginBottom: 5,
      },
      addProjectButton:{ 
      border: '1px solid black', 
      backgroundColor: '#DCD0CE',
      fontWeight:"bold"
     },
     searchInput:{ 
            marginLeft: 15, 
            border: '0.5px solid black', 
            width: 200 
     }
}

export default ProjectExplorer;
