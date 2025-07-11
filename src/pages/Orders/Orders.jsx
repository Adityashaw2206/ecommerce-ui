// import React, { useContext } from 'react'
// import { ShopContext } from '../../context/ShopContext'
// import Title from '../../components/Title'
// const Orders = () => {
//   // const {products, currency} = useContext(ShopContext)
//   return (
//     <div className='border-r pt-16'>
//       <div className='text-2xl font-bold'>
//         <Title text1={'My'} text2={'Order'} />
//       </div>
//     </div>
//   )
// }

// export default Orders


import React from "react";

const Orders = () => {
  const orderItems = [
    {
      id: 1,
      name: "Casual Shirt",
      price: 799,
      quantity: 2,
      image: "/images/shirt.jpg",
    },
    {
      id: 2,
      name: "Jeans",
      price: 1299,
      quantity: 1,
      image: "/images/jeans.jpg",
    },
  ];

  const shippingAddress = {
    name: "Aditya Shaw",
    address: "123 Park Street, Kolkata, India",
    phone: "+91 9876543210",
    pincode: "700016",
  };

  const paymentMethod = "Cash on Delivery";
  const totalPrice = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const currentStatus = "Shipped"; // options: Placed, Shipped, Out for Delivery, Delivered

  const statusSteps = ["Placed", "Shipped", "Out for Delivery", "Delivered"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Review Your Order</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left: Details */}
        <div className="md:col-span-2 space-y-6">
          {/* Shipping Info */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">Shipping Details</h2>
            <p><strong>Name:</strong> {shippingAddress.name}</p>
            <p><strong>Address:</strong> {shippingAddress.address}</p>
            <p><strong>Phone:</strong> {shippingAddress.phone}</p>
            <p><strong>Pincode:</strong> {shippingAddress.pincode}</p>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <p>{paymentMethod}</p>
          </div>

          {/* Ordered Items */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Your Items</h2>
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-2">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Order Status Tracker */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Order Status</h2>
            <div className="flex items-center justify-between space-x-2">
              {statusSteps.map((step, index) => {
                const isActive = statusSteps.indexOf(currentStatus) >= index;
                return (
                  <div key={step} className="flex-1 text-center">
                    <div
                      className={`w-10 h-10 mx-auto rounded-full ${
                        isActive ? "bg-green-500" : "bg-gray-300"
                      } text-white flex items-center justify-center font-bold`}
                    >
                      {index + 1}
                    </div>
                    <p
                      className={`mt-2 text-sm ${
                        isActive ? "text-green-600 font-semibold" : "text-gray-400"
                      }`}
                    >
                      {step}
                    </p>
                    {index < statusSteps.length - 1 && (
                      <div className="h-1 w-full bg-gray-300 mt-2 mx-auto relative">
                        <div
                          className={`absolute top-0 left-0 h-1 ${
                            isActive ? "bg-green-500" : "bg-gray-300"
                          }`}
                          style={{
                            width:
                              statusSteps.indexOf(currentStatus) > index
                                ? "100%"
                                : "0%",
                            transition: "width 0.5s ease",
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <button className="mt-6 w-full border border-black text-black py-2 rounded-2xl font-semibold hover:bg-black hover:text-white transition">
              Track Order
            </button>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="bg-white p-4 rounded-2xl shadow h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>₹{totalPrice}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping</p>
            <p>₹40</p>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-3">
            <p>Total</p>
            <p>₹{totalPrice + 40}</p>
          </div>
          <button className="mt-6 w-full bg-black text-white py-3 rounded-2xl font-semibold hover:bg-gray-800 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
