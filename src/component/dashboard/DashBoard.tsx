import React, { useEffect, useState } from 'react'
import { Idata } from '../../interface/product'
import { DeleteData, getALlData } from '../../api/product.servcies'
const DashBoard = () => {
  const [item, setItem] = useState<Idata[]>([])
  useEffect(() => {
    const mapData = async() => {
    const {data} = await getALlData()
    setItem(data)
    }
    mapData()
  }, [item])
  const handelRemove = async(id : number) => {
      await DeleteData(id)
  }
  return (
    <div>
      {item?.map((newItem : Idata) => (
        <div key={ newItem.id}>
          <p>{ newItem.id}</p>
          <p>{ newItem.name}</p>
          <p>{ newItem.price}</p>
          <button className='bg-red-500 w-[50px] rounded-md ' onClick={()=>handelRemove(newItem.id)}> delete </button>
        </div>
      ))}
    </div>
  )
}

export default DashBoard
