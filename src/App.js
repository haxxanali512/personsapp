
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Carasol from './components/Carasol'
import Form from './components/Form'
import Button from './components/Button'

function App() {
  const [button, setButton] = useState(false);
  const [data, setData] = useState([
    {
      "status": "403",
      "source":  {"pointer": "/data/attributes/secretPowers" },
      "detail": "Editing secret powers is not authorized on Sundays.",
      "title": "The backend responded with an null",
    },
    {
      "status": "422",
      "source": { "pointer": "/data/attributes/volume" },
      "title": "The backend responded with an code 11",
      "detail": "Volume does not, in fact, go to 11."
    },
    {
      "status": "500",
      "source": { "pointer": "/data/attributes/reputation" },
      "title": "The backend responded with an error of code is not defined",
      "detail": "Reputation service not responding after three requests."
    }
  ])
    
  const deleteData = (id) => {
    setData(data.filter((value) => value.status != id));
  }
  const addData = (value) => {
    const newValue = value;
    setData(oldData => [...oldData, newValue])
  }
  return (
    <>
  
  <Header />
  <Button onClick = {() => setButton(!button)} button = {button}/>
  {button && <Form onAdd = {addData}/>}
  <br/>
  {data.length > 0 ? <Carasol data = {data} onDelete = {deleteData}/>: 'No data found'}
 

    </>
  );
}
const array = [
  "Student one is Ali",
  "Student 2 is ahmad",
  "Student 3 is rehan"
];
const students = array.map((std, i)=>({id: i, description: std}));
console.log(students);

export default App;
