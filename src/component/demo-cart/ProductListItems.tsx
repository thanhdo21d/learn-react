import React, { createContext, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DataContext } from './AddToCart'
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config.firebase';


const ProductListItems = (props) => {
  const [user] = useAuthState(auth)
  console.log(user,"user")
  const { t,i18n } = useTranslation("home")
  const [success,setSucess] = useState(false)
  const { sanPham } = props
   const {  addToCard } = useContext(DataContext)
  return (
    <div>
      <img className='w-[300px]' src={sanPham.images} alt='' />

      <div className='text-center pt-5'>
        <p >{ sanPham.tenSP }</p>
        <p className='pt-2'>{ sanPham.price.toLocaleString() } VND</p>
        <button onClick={() => {
          if (user) {
           setSucess(true)
          return addToCard(sanPham)
          } else {
            alert("bạn cần phải đăng nhập trước khi mua hàng ")
            return;
         }
        }} className='mt-4 py-3 w-[100px] bg-green-500 rounded-md text-white font-bold'> {t("home.Add TO Cart")} </button>
      </div>

      {success && <div>
        <button>
          đã thêm vào giỏ hàng
      </button>
      </div>}
    </div>
  )
}

export default ProductListItems
