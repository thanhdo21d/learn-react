import React from 'react'
import styles from  './Header.module.css'
const Header = () => {

  // css module
  const textHeader = { // cach so 1 tao bien
    color: "red",
    backgroundColor: 'green'
  }
  const isStudent = false
  return (
    // ghi truc tiep inline tren the
   
    <div className={styles.text}
      style={{
        color: "red",
        backgroundColor: 'green'}} > 
    </div>
  )
}
export default Header