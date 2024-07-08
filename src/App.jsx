import { useEffect, useRef,useState } from 'react'
import Names from './Components/Names'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'

import service from './services/service'

const App = () => {
  const mySearch=useRef(null)
  const [filtered,setFiltered]=useState([])
  const [persons, setPersons] = useState(null) 
  const [err,setError]=useState(null)

  

  useEffect(()=>{
    service.getAll()
    .then(res=>{
      setPersons(res)
      console.log(res)
    
    })
  },[])

  function handleChange(){
    if(mySearch.current.value){
    mySearch.current.value 
    const filtere=persons.filter(person=>person.name.includes(mySearch.current.value));
    setFiltered(filtere)
    console.log(filtered)
    }else{
      setFiltered([])
    }
    
    
  }
  
  if(persons===null){
    return <div>Loading</div>
  }
  return (
    
    <div>
      {err?<div style={{
        color:'red',
        border:'solid',
        borderRadius:'5px',
        borderColor:'red',
        padding:'10px',
        }}>{err}</div>
        :null}
      <h2>Phonebook</h2>
      <div>
        <Filter handleChange={handleChange} ref={mySearch}/>
      </div>
      <h3>Add a New</h3>
      <PersonForm setError={setError} persons={persons} setPersons={setPersons}/>
      <h3>Numbers</h3>

      {filtered.map(person=>{
        return <Names setError={setError} key={person.id}  person={person} />
      })}
      
    </div>
  )
}

export default App