const Button = ({onClick, button}) => {
    return (
        <div class="d-grid gap-2 col-6 mx-auto">
               <button class="btn btn-success" onClick={onClick}>{button ? 'Hide' : 'Show'} </button> 
        </div>
     
    )
}

export default Button;