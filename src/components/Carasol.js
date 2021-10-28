import Singledata from './Singledata';

const Carasol = ({data, onDelete}) => {
  
    return (
        <>
        {data.map((value) => (<Singledata key = {value.status} task = {value} deleteValue = {onDelete}/>))}
        </>
       
    );
   
   
}
Carasol.defaultProps = {
    title: 'This is a test prop',
}
export default Carasol

