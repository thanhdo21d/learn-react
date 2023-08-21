import React, { useState } from 'react'
import data from "../../data/data.json"
const Thukinh = () => {
    const [dataCurrrent, setDataCurrrent] = useState({
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    })
    const mapData = () => {
        return data.map((dataItem) => (
            <img
            onClick={()=>handelClick(dataItem)}
            style={{width:"80px",marginLeft:"5px"}}
            key={dataItem?.id}
            src={dataItem.url}
            alt="ok"
            />
        ))
    }
     const handelClick = (dataItem) => {
    setDataCurrrent(dataItem)
    }
  return (
      <div>Thukinh
          <div style={{position:'relative'}}>
              <div>
              <img src='./glassesImage/model.jpg' alt='ok' />
              </div>
              <div style={{position:'absolute',top:"146px",  left: "120px"}}>
                  <img style={{    width: "240px",  }} src={dataCurrrent.url} alt='' />
                  <p>{dataCurrrent.name}</p>
                  <p>{dataCurrrent.price}</p>
                  <p>{dataCurrrent.desc}</p>
              </div>
          </div>
          <div style={{display:"flex"}}>
           {   mapData()}
          </div>
    </div>
  )
}

export default Thukinh