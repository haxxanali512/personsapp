import {useState} from 'react'

const Form =({onAdd, button}) => {
    const [status, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [detail, setDetails] = useState('');
    const restriction =(e)=>{
        e.preventDefault();
        if(!title && !status && !detail){
            alert('Data not added')
            return
        }
        else{
            onAdd({status, title, detail})
            setStatus('');
            setTitle('');
            setDetails('');
        }
    }
    return (
        <form className="container" onSubmit={restriction}>
             <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Status</label>
            <input type="text" className="form-control" id="exampleInputPassword1" value={status} onChange={(e) => setStatus(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Details</label>
            <input type="text" className="form-control" id="exampleInputPassword1" value={detail} onChange={(e) => setDetails(e.target.value)}/>
        </div>
        
        <button type="submit" className="btn btn-success">Submit</button>
        </form>
    )
}

export default Form;