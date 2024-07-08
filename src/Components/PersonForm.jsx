import { useRef } from "react"
import serv from '../services/service'
export default function PersonForm({setError,persons,setPersons}){
    const myName=useRef(null)
    const myNumber=useRef(null)
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        const some= persons.find((person)=> person.name==myName.current.value);
        if(some){
          alert(`${myName.current.value} is already entered`)
        
        }
         else {
          const news={
            name:myName.current.value,
            id:`${persons.length+1}`,
            numberr:myNumber.current.value
          };
          serv.create(news)
          .then(res=> {
            setPersons(persons.concat(res))
            setError(`Added ${res.name}`)
            setTimeout(()=>{
              setError(null)
            }
            ,5000)
          }
          )
          
          
          myName.current.value=''
          myNumber.current.value=''
        }
      }
   return( 
    <form onSubmit={(event)=>handleSubmit(event)}>
        <div>
          Name: <input ref={myName}   />
          </div>
          <div>
          Number: <input ref={myNumber}  /> 
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      
    )
}