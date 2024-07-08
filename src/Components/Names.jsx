import service from "../services/service";
export default function Names({setError,person}){
    const handleClick=(iden)=>{
        console.log(iden)
        const newNumber=prompt('Enter the new number');
        const old={
            ...person,
            number:newNumber
        }
        console.log(old)
        service.update(iden,old).then(res=>{
            setError(`The number of ${person.name} is updated to ${newNumber}`)
            setTimeout(()=>{
                setError(null)
            },5000)
        })
            
        
    }
    const handleDelete=(iden)=>{
        service.remove(iden).then(res=>{
            
            setError(`${res.name} is deleted`)
            setTimeout(()=>{
                setError(null)
            },5000)
            
        })
        .catch(err=>{
            setError(err.message)
            setTimeout(()=>{
                setError(null)
            },5000)
        }
    )
    }
    
        return(

            <table>
            <tbody>
            <tr>
               <td> {person.name}   {person.number}</td>
               <td>  
               <button onClick={()=>handleClick(person.id)}>Edit the number</button>
               </td>
               <td>  
               <button onClick={()=>handleDelete(person.id)}>Delete</button>
               </td>
            </tr>
            </tbody>
            </table>
        )
    
}