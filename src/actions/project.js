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
           alert("Error Fetching projects")
       }
   }
   );
  };

  export const addProjectToServer = (title,description) => (dispatch) => {
    fetch("https://protected-ocean-59683.herokuapp.com/addProject",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json',
       },
       body:{
           name:title,
           description:description
       }
    }).then(
        dispatch(fetchAllProjects())
    )
   };

  export const insertProject = (data) => {
      return {
      type:"INSERT_PROJECT",
      payload:{
         data
      }
  }
}

 