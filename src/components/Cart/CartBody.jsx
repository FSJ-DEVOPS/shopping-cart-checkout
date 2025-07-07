import React from 'react'
import { useNavigate } from 'react-router-dom'
const CartBody = () => {
  const nav = useNavigate();
  function handleNav() {
    
    nav("/payment");
  }
  return (
    <div className='container mx-auto max-w-md max-h-max m-4 shadow-black shadow-2xl rounded-lg flex flex-col gap-10 justify-around p-10' style={{ backgroundColor: 'rgb(182,215,204)' }}>
      <div className='max-w-md max-h-max shadow-gray-800 shadow-md p-1 rounded-md bg-white'>
        <p>name</p>
        <p>description</p>
        <p>-0+</p>
        <div className='flex justify-between  self-center'>
          <p>price: $$</p>
          <button className='bg-gray-600 hover:bg-gray-500 px-5 py-1 rounded-md'>remove</button>
        </div>
      </div>
      <div className='max-w-md max-h-max shadow-gray-800 shadow-md p-1 rounded-md bg-white'>
        <p>name</p>
        <p>description</p>
        <p>-0+</p>
        <div className='flex justify-between'>
          <p>price: $$</p>
          <button className='bg-gray-600 hover:bg-gray-500 px-5 py-1 rounded-md'>remove</button>
        </div>
      </div>
      <div className='max-w-md max-h-max shadow-gray-800 shadow-md p-1 rounded-md bg-white'>
        <p>name</p>
        <p>description</p>
        <p>-0+</p>
        <div className='flex justify-between'>
          <p>price: $$</p>
          <button className='bg-gray-600 hover:bg-gray-500 px-5 py-1 rounded-md'>remove</button>
        </div>
      </div>
      <div className='flex justify-around'>
        <button className='bg-gray-600 hover:bg-gray-500 px-9 rounded-md'>Add items</button>
        <button className='bg-gray-600 hover:bg-gray-500 px-9 py-2 rounded-md' onClick={handleNav}>Checkout</button>
      </div>
    </div>
  )
}

export default CartBody
