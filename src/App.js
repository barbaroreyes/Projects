import React,{useState,useEffect} from 'react'
import Amplify,{API} from 'aws-amplify'
import awsconfi from './aws-exports'
import {listProjects} from './graphql/queries'
import './App.css';
Amplify.configure(awsconfi)

function App() {
  const [project,setProject] = useState([])


  return (
    <div className="App">
      <>Header</>
      <input type='text' placeholder='url'/>
    </div>
  );
}

export default App;
