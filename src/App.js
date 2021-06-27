import React,{useState,useEffect} from 'react'
import Amplify,{API,graphqlOperation} from 'aws-amplify'
import awsconfi from './aws-exports'
import {createProject} from './graphql/mutations'
import {listProjects} from './graphql/queries'
import './App.css';
Amplify.configure(awsconfi)

function App() {
  const [project,setProject] = useState([])
  const [projectList,setProjectList] = useState([])

 useEffect(()=>{
   fetchAll()
 },[])
   
const  fetchAll = async()=>{
 try {
   const projectData = await API.graphql(graphqlOperation(listProjects)) 
   const listPro = projectData.data.listProjects.items 
   console.log(listPro)
   setProjectList(listPro)
 } catch (error) {
   
 }
}


  const addProject = async()=>{
    const data = {name:project}
  try {
    await API.graphql(graphqlOperation(createProject,{input:data}))
  console.log("done")
  } catch (error) {
    console.log('error',error)
  }
  }
  // const onChangeInput = (e)=>{
  //  setProject(e.target.value)
  //  console.log(e.target.value)
  // }
 
  // const handleSubmit = (event) =>{
  // event.preventDefault()

  // }

  return (
    <div className="App">
      <>Nav</>
      <>Header</>
      <>main</>

      <input type='text' placeholder='url' 
      onChange={e =>setProject(e.target.value)}
      
      />
      <button onClick={() => addProject()}>Submit</button>
      
    </div>
  );
}

export default App;
