import React from 'react'
import { BsCartPlus } from 'react-icons/bs'




const CardProduct = ({dataProduct}) => {
  console.log(dataProduct.image_url);
  const apiHost = import.meta.env.VITE_APP_API_HOST
  function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 2, style: 'currency', currency: 'IDR' }).format(number);
  }
  return (
    <div>
          <div className="card w-full bg-base-100 shadow-xl mt-4 border">
        <figure><img src={`${apiHost}/images/products/${dataProduct.image_url}`} alt="product" className='m-6 h-52 hover:scale-110 cursor-pointer rounded-md'/></figure>
              <div className="card-body p-3">
                  <h2 className="card-title">
                      {dataProduct.name}
                  </h2>
                  {/* <p>{dataProduct.description}</p> */}
                  <p>{formatRupiah(dataProduct.price)}</p>
                  <button className="btn btn-outline"><BsCartPlus/></button>
                  <div className="card-actions justify-end">
                      <div className="badge badge-outline" >Fashion</div>
                      <div className="badge badge-outline">Products</div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default CardProduct