import React, { useState } from 'react'

const ReactState = () => {
    const [count, setCount] = useState(false)
    
    const updateState = () => {
        setCount(!count)
    }

  return (
      <div>
          {/* <p>{count}</p> */}
          ReactState 
          <br />
          <button className={`${count ? "bg-green-500" :" bg-red-500"}`}
              onClick={updateState}
              style={{  padding: "5px", color: "white" }} >
              set Count with useState
          </button>

          {count && <div>
          
              toogle menu
          </div>}
    </div>
  )
}

export default ReactState