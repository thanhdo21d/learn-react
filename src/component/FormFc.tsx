import React, { useEffect, useState } from 'react'

type Props = {}

const FormFc = (props: Props) => {
  const [data, setData] = useState({
    name: " ",
    checed : false,
  })
  // useEffect

  useEffect(() => {
    console.log("oki")
    setData(data)
  })
  console.log("helo")
  return (
    <div>FormFc</div>
  )
}

export default FormFc
