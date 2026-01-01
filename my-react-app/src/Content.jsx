 import './App.css'
 import Listitem from './Listitem';


 const Content=({item,handlecheck,handleDelete})=>{
    
return(
   <>
        {(item.length) ?(
            <Listitem 
             item={item}
             handlecheck={handlecheck}
             handleDelete={handleDelete}
            />
        ):(
        <p style={{marginTop:'2rem'}}>your list is empty</p>
        )}

      
    </>
  )


 } 
  

export default Content;
