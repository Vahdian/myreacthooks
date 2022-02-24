import './App.css';
import React, {useReducer} from "react"
 
function appReducer(state, action){
switch (action.type) {
    case "add":{
      return [
        ...state,
        {
          id:Date.now(),
          text:"",
          completed: false,
        }
      ]
    }
    
    default:
      break;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(appReducer, [])
  return (
    <div>
        <button onClick={() => dispatch({ type: "add"})}>The time please</button>
    {state.map(item => {
      <div key={item.id}>{item.id}</div>
    } )}
    </div>
  );
}

