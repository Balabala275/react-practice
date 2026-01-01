import Content from './Content';
import { useState } from 'react';
import './App.css'
import Header from './Header';
import Footer from './footer';
import AddItem from './AddItem';



function App() {
  const [item,setitem]=useState(JSON.parse(localStorage.getItem('todo_list')));
const[newItem,setNewItem]=useState('');

const addItem=(item)=>{
  const id=item.length ?item[item.length-1].id+1:1;
  const addNewItem={id,checked:false,item:newItem}
  const listitems=[...item ,addNewItem]
  setitem(listitems)
   localStorage.setItem("todo_list",JSON.stringify(listitems))

}

const handlecheck=(id)=>{
  const listitems=item.map((item)=>item.id===id?{...item,checked:!item.checked} :item)
    setitem(listitems)
    localStorage.setItem("todo_list",JSON.stringify(listitems))
}
const handleDelete =(id)=>{
  const listitems=item.filter((item)=>item.id!==id)
  setitem(listitems)
  localStorage.setItem("todo_list",JSON.stringify(listitems))
}
const handleSubmit=(e)=>{
  e.preventDefault()
  if(!newItem) return;
  console.log(newItem)
  addItem(newItem)
  setNewItem('')
}


  return(
    <>
     <Header />
     <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit} 
     
     />
     <Content 
       item={item}
       handlecheck={handlecheck}
       handleDelete={handleDelete}
     />
     <Footer />
    
    
    </>
  )

}

export default App;
