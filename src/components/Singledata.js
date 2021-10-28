import {FaTimes} from 'react-icons/fa'
const singleData = ({task ,deleteValue}) => {
    return(
        <>
        <div className="container">
    <h1>{task.title}</h1>
    <p>{task.detail}</p>
    <p>{task.status}</p>
    <button type="button" className="btn btn-danger" onClick = { () => deleteValue(task.status)}><FaTimes /> Delete</button>
        </div>
        <br />
        </> 
    )
}
export default singleData;