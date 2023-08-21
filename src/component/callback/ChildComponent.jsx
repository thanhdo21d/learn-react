import React from 'react'

const ChildComponent = ({ onButtonClick }) => {
    
    const message = "clicked component con "
    return (
      <div>
          ChildComponent
          
          <button onClick={()=> onButtonClick(message)} style={{backgroundColor:"red", color:"white"}}>
              click
          </button>
    </div>
  )
}

export default ChildComponent