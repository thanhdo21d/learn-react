import React, { createContext, useState } from 'react'
import ModelCart from './ModelCart'
import ProductList from './ProductList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import "../../i18n/i18n"
import { locals } from '../../i18n/i18n';
import PortalDemo from '../react-portal/PortalDemo';

export const DataContext = createContext({
  addToCard: (sanPham: any) => { },
  gioHang: [] as any,
  showCart: Boolean as any,
  remoteProduct: (maSP: number) => { },
  updateGioHang:(maSP: number, number: number)=>{}
})

const AddToCart = () => {
  const { t,i18n } = useTranslation("home")
  console.log(t)
  const [gioHang, setGioHang] = useState<any[]>([])
  const [showCart, setShowCart] = useState<boolean>(false)
  const notify = () => toast.success('Đã Thêm Sản Phẩm Thành Công ', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const notifyError = () => toast.error('Sản Phẩm Đã Hết Hàng', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  let addToCard = (sanPham: any) => {
    let spcart = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      price: sanPham.price,
      images: sanPham.images,
      soLuong: 1
    }

    let index = gioHang.findIndex((spGH: any) => spGH.maSP === spcart.maSP)
    if (index !== -1) {
      gioHang[index].soLuong += 1
      notifyError()
    }
    else {
      gioHang.push(spcart)
      notifyError()
    }
    setGioHang([...gioHang])
    console.log(sanPham)
  }
  const checkSLCart = () => gioHang.reduce((total : any, SP : any) => {
    return (total += SP.soLuong)
  }, 0)
  const remoteProduct = (maSP: number) => {
    let index = gioHang.findIndex((spGioHang: any) => spGioHang.maSP === maSP)
    if (index !== -1) {
      gioHang.splice(index, 1)
      setGioHang([...gioHang])
    }
  }
  const updateGioHang = (maSP: number, number: number) => {
    let updateGiohangTotal = [...gioHang]
    let index = updateGiohangTotal.findIndex((spGioHang) => spGioHang.maSP === maSP)
    if (index !== -1) {
      if (updateGiohangTotal[index].soLuong <= 1 && number === -1) {
        alert("sản phẩm tối thiểu là 1")
        return;
      }
      updateGiohangTotal[index].soLuong += number
      setGioHang(updateGiohangTotal)
    }
  }
  const changeLg = (lag : string) => {
   i18n.changeLanguage(lag)
  }
  const currenLanguage = locals[i18n.language as keyof typeof locals]
  return (
    <div>
      <center> { t("home.Shope Sale")}</center>
      <div className='text-right'>
        <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
      </div>
      <div className='text-right pr-10'>
        <p onClick={() => setShowCart(!showCart)}>  {checkSLCart()} { t("home.Shope Sale")}</p>
      </div>

      <DataContext.Provider value={{
        addToCard,
        gioHang,
        showCart,
        updateGioHang,
        remoteProduct
      }}>
      <ModelCart/>
      <ProductList  />
    </DataContext.Provider>

      <button onClick={()=> changeLg("en")} className='p-5'>
        en
      </button>

       <button onClick={()=> changeLg("vi")} className='p-5'>
        vi
      </button>

      <p>
        {currenLanguage}
      </p>

      <PortalDemo/>
    </div>
  )
}

export default AddToCart
