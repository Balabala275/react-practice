import { useState } from 'react'
import './App.css'
import Example2 from './component/Example2';
import { li } from 'framer-motion/client';

function App() {
  const [item,setitem]=useState([
      {
      id:1,
      checked:true,
      item:"this is first"
      },
     {
      id:2,
      checked:false,
      item:"anything is here"
     },
    {
      id:3,
      checked:false,
      item:"anything is here not a mettter"

    }
]);
const handlecheck=(id)=>{
  const listitems=item.map((item)=>item.id===id?{...item,checked:!item.checked} :item)
    setitem(listitems)
}



  return (
    <>
    <ul>
       {item.map((item)=>(
        <li>
          <input key={item.id}
          type='checkbox'
          onChange={()=>handlecheck(id)}
          checked={item.checked}
          />
          <label >{itemm.item}</label>
          <button>delect</button>
        </li>
       ))}
    </ul>

      <Example2 />
    </>
  )
}

export default App;
