 import './App.css'


const Lineitem=({item,handlecheck,handleDelete})=>{
    return(
        <>
                      <li className='todo-item'  >
                            <input 
                                type='checkbox'
                                onChange={()=>handlecheck(item.id)}
                                checked={item.checked}
                            />
                            <label style={(item.checked)?{textDecoration:'line-through'}:null} className='checkeds'
                                onDoubleClick={()=>handlecheck(item.id)}
                            >{item.item}</label>
                            <button className='btn' onClick={()=>handleDelete(item.id)}
                            >delect</button>
                        </li>
        </>
    );
}
export default Lineitem;