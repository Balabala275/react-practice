import { useState } from 'react'
import './App.css'
// import Example2 from './component/Example2';


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
    <div className='title'>
    <h1>To do list application</h1>
    </div>
    <ul className='todo-list'>
       {item.map((item)=>(
        <li className='todo-item' key={item.id}>
          <input 
          type='checkbox'
          onChange={()=>handlecheck(item.id)}
          checked={item.checked}
          />
          <label >{item.item}</label>
          <button className='btn'>delect</button>
        </li>
       ))}
    </ul>

    <footer>$ 2026 | developed by Bala</footer>
    </>
  )
}

export default App;
