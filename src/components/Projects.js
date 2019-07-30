import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Project from './Project';
import { fetchAllProjects } from '../actions/project';
import '../style.css';

class Projects extends React.Component {
    state={
      pageOffset: 1,
      searchInput: '',
    }

    loadMore=() => {
      this.setState(prevState => ({
        pageOffset: prevState.pageOffset + 1,
      }));
    }

    componentDidMount() {
      this.props.fetchAllProjects();
    }

    render() {
      const loadedProjects = this.props.projects.slice(0, this.state.pageOffset * 9);

      const filteredProjectsData = loadedProjects.filter(item => item.name.toLowerCase().includes(this.props.searchCriteria.toLowerCase()));

      const filteredProjects = filteredProjectsData.map(item => <Project title={item.name} key={item.id} description={item.description} timestamp={this.props.timestamp} />);

      return (
        <div>
          <div className="card-wrapper">
            {filteredProjects}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            {(this.props.projects.length > filteredProjects.length) && (
            <button
              onClick={this.loadMore}
              style={{
                color: 'black', height: 30, border: '1px solid black', backgroundColor: '#DCD0CE',
              }}
            >
            LoadMore
            </button>
            )}
          </div>
        </div>
      );
    }
}


const mapStateToProps = state => ({
  projects: state.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchAllProjects,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
