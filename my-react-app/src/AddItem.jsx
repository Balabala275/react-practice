import React from "react";
import './App.css'
const AddItem=({newItem,setNewItem,handleSubmit})=>{
    return(
        <form  className="formsty" onSubmit={handleSubmit}>
          <label className="lablesty"htmlFor="addItem">Add item</label>
            <input
            className="inputsty"
              autoFocus
              id="addItem"
              type="text"
              placeholder="addItem"
              required
              value={newItem}
              onChange={(e)=>setNewItem(e.target.value)}
            />
            <button
            className="btnsty"
               type="submit"
            >submit</button>
        </form>
    );

}
export default AddItem;