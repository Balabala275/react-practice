
import Lineitem from "./Lineitem";

const Listitem=({item,handlecheck,handleDelete})=>{

    return(
            <> 
                <ul className='todo-list'>
                    {item.map((item)=>(
                        <Lineitem 
                         key={item.id}
                         item={item}
                         handlecheck={handlecheck}
                         handleDelete={handleDelete}
                        
                        />
                       
                    ))}
                </ul>
            </>
    );
}
export default Listitem;