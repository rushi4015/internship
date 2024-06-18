const ChildComponent=(props)=>{
    return (
                <>
        <button onClick={()=>{
                    props.onNameChange();
        }}
            >change the name(parent)
            </button>
        
        </>
    )
}

export default ChildComponent