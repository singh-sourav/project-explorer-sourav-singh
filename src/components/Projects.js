import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Project from './Project';
import Loading from "./../../src/Loading_icon.gif";
import { fetchAllProjects } from '../actions/project';
import '../style.css';

class Projects extends React.Component {
    state={
      pageOffset: 1,
      searchInput: '',
      loading:true,
    }

    loadMore=() => {
      this.setState(prevState => (
        {
        pageOffset: prevState.pageOffset + 1,
      }));
    }

    stopLoader=()=>{
      this.setState({
        loading:false,
      })
    }

    componentDidMount() {

      this.props.fetchAllProjects(this.stopLoader);
    }

    render() {

      //search filtering
      const loadedProjects = this.props.projects.slice(0, this.state.pageOffset * 9);
      const filteredProjectsData = loadedProjects.filter(item => item.name.toLowerCase().includes(this.props.searchCriteria.toLowerCase()));

      const filteredProjects = filteredProjectsData.map(item => <Project title={item.name} key={item.id} description={item.description} timestamp={item.timestamp} />);

      return (
        <div>
       <div style={{marginTop:50,display:"flex",flexDirection:"row",justifyContent:"center"}}>
           {this.state.loading && <img
              width="200"
              alt="loading.."
              src={Loading}
            />}
          </div>
          <div className="card-wrapper">
            {filteredProjects}
          </div>
          <div style={styles.loadMoreSection}>
            {(this.props.projects.length > filteredProjects.length) && (
            <button
              onClick={this.loadMore}
              style={styles.loadMoreButton}
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


const styles={

    loadMoreSection:{
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'center' 
    },
    loadMoreButton:{
        color: 'black', 
        height: 30, 
        border: '1px solid black', 
        backgroundColor: '#DCD0CE',
    },
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
