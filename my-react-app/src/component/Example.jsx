import React from "react";
function Example(){

     function handleclick(){
    alert("button clicked")
    }
  
  return(
    <>
    <h1 className='title'>wellcome to the react</h1>
      <h2>learing some this </h2>
      <button onClick={handleclick}>click</button>
    <h1>hello world </h1>
    </>
  );
}
export default Example;