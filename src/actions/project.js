import { dummydata } from "../dummydata";

//redux-thunk : fetchAllProjects , addProjectToServer

export const fetchAllProjects = () => (dispatch) => {
   fetch("https://protected-ocean-59683.herokuapp.com/fetchProjectList",{
       method:"GET",
       headers: {
        'Content-Type': 'application/json',
      },
   }).then((response)=>response.text()).then((json)=>{
       console.log(json);
       if(json.status===200)
       dispatch(insertProject(json.data))
       else{    
       //if there is no permission to fetch from server. Populate dummy data to check other app functionlity    
       dispatch(insertProject(dummydata))
       }
   }
   ).catch((error)=> {
       console.log(error);
       //if there is no permission to fetch from server. Populate dummy data to check other app functionlity
       dispatch(insertProject(dummydata));
   })
  };

  export const addProjectToServer = (title,description,callback) => (dispatch) => {
    fetch("https://protected-ocean-59683.herokuapp.com/addProject",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json',
       },
       body:{
           name:title,
           description:description
       }
    }).then(()=>{
        dispatch(fetchAllProjects())
        callback();
    }
    ).catch((error)=> {
        console.log(error);
        //if there is no permission to fetch from server. Populate dummy data to check other app functionlity
        dispatch(addDummyProject(title,description));
        callback();
    })
   };

  export const insertProject = (data) => {
      return {
      type:"INSERT_PROJECTS",
      payload:{
         data
      }
  }
}
export const addDummyProject = (title,description) => {
    return {
    type:"ADD_DUMMY_PROJECT",
    payload:{
        title,
        description
    }
}
}
 