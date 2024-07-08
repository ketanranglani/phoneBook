import { forwardRef } from "react"

 const Filter=forwardRef(function Filter(props,mySearch){
    
    
    return(
        <div>
            Search <input ref={mySearch} onChange={props.handleChange}/>
        </div>
    )
})

export default Filter