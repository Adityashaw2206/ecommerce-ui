import React, { useContext, useState } from 'react'
import Title from '../../components/Title.jsx'
import CartTotal from '../../components/CartTotal.jsx'
import { ShopContext } from '../../Context/ShopContext.jsx'
import { assets } from '../../assets/assets'
const PlaceOrder = () => {
  // TODO: Replace the following mock data with actual data from your store or API
  // const cartData = [];
  // const currency = 'USD';
  // const shipping_charge = 0;
  const {cartItems, currency, shipping_charge,products, navigate} = useContext(ShopContext)
  const cartData = [];
  Object.entries(cartItems).forEach(([productId, sizesObj]) => {
    Object.entries(sizesObj).forEach(([size, qty]) => {
      const product = products.find(p => String(p._id) === String(productId));
      if (product) {
        cartData.push({ ...product, size, quantity: qty });
      }
    });
  });
  const [method, setMethod] = useState('cod')
  return (
    <div className=' flex flex-col lg:flex-row justify-between gap-5 sm:gap-0 sm:pt-14 min-h-[60vh]'>
      <div className='mr-10 flex flex-col gap-4 w-full sm:max-w-[400px]'>
          <div className='text-3xl my-3'>
            <Title text1={'Delivery'} text2={'Information'} />
          </div>
          <div className='gap-3 flex'>
            <input className='border border-gray-300 rounded w-full py-1.5 px-3.5' type="text" placeholder='First Name'/>
            <input className='border border-gray-300 rounded w-full py-1.5 px-3.5' type="text" placeholder='Last Name'/>
          </div>
          <div className='flex'>
            <input className='border border-gray-300 rounded w-full py-1.5 px-3.5' type="email" placeholder='Email' />
          </div>
          <div className='flex'>
            <input className='border border-gray-300 rounded w-full py-1.5 px-3.5' type="text" placeholder='Street' />
          </div>
          <div className='gap-3 flex'>
            <input className='border border-gray-300 rounded w-full py-1.5 px-3.5' type="text" placeholder='City'/>
            <input className='border border-gray-300 rounded w-full py-1.5 px-3.5' type="text" placeholder='State'/>
          </div>
          <div className='gap-3 flex'>
            <input className='border border-gray-300 rounded w-full py-1.5 px-3.5' type="number" placeholder='Zipcode'/>
            <input className='border border-gray-300 rounded w-full py-1.5 px-3.5' type="text" placeholder='Country'/>
          </div>
          <div className='gap-3 flex'>
            <input className='border border-gray-300 rounded w-full py-1.5 px-3.5' type="number" placeholder='Phone'/>
          </div>
      </div>

      {/* ----------------right side------------ */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80 justify-end'>
          <CartTotal  cartData={cartData} currency={currency} shipping_charge={shipping_charge}/>
        </div>
        <div className='text-2xl mt-12'>
          <Title text1={'Payment'} text2={'Method'} />
          {/* payment section method */}
          <div className='flex gap-3 lg:flex-row'>
            <div onClick={() => setMethod('razorpay')}className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method == 'razorpay' ? 'bg-green-500' : ' '}`}></p>
              <img className='h-5 ms-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('stripe')}className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method == 'stripe' ? 'bg-green-500' : ' '}`}></p>
              <img className='h-5 ms-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')}className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method == 'cod' ? 'bg-green-500' : ' '}`}></p>
              <p className='font-medium text-sm text-gray-500 mx-4'>Cash On Delivery</p>
            </div>
          </div>
        </div>
        <div className='w-[50%] flex justify-end ml-auto'>
            <button
              className="w-10px mt-4 px-6 py-2 text-white bg-black border border-black rounded active:bg-gray-400  transition"
              onClick={() => navigate('/orders')}
            >
              Place Order
            </button>
          </div>
      </div>
    </div>
  )
}

export default PlaceOrder
