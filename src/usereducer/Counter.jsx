import React,{useReducer} from 'react';

const intialstate = {showtext : false};

const reducer = (state, action ) => {
  switch (action) {
    case 'show':
      return{...state , showtext : true}

    case 'hide':
      return{...state, showtext : false}  
    default:
      break;
  }

}

const Counter = () => {
  const[ state , dispatch] = useReducer(reducer , intialstate)
 

  return (
    <div>
     {
      state.showtext? <h1>hello world</h1> : <h1></h1> 

     }

      <button onClick={()=>dispatch('show')}>Show text</button>
      <br /><br />
      <button onClick={()=>dispatch('hide')}>Hide text</button>
      
    </div>
  );
}

export default Counter;
