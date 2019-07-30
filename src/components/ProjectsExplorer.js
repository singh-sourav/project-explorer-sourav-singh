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
          <div style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 50, height: 30, marginBottom: 15,
          }}>
            <button style={{ border: '1px solid black', backgroundColor: '#DCD0CE' }} onClick={this.props.openModal}>Add project</button>
            <input style={{ marginLeft: 15, width: 200 }} onChange={this.onSearch} placeholder="Search" />
          </div>
          <Projects searchCriteria={this.state.searchCriteria} />
        </div>);
    }
}


export default ProjectExplorer;
