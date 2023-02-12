import React from 'react'

export default function Product(props) {
  let {id,product} = props.props
  console.log(id)

  let containerStyle = `
  cursor-pointer
  w-[300px] h-[500px] 
  rounded shadow-lg hover:scale-105 hover:shadow-black 
  transition ease-in-out delay-150
  `
  return (
    <div className={containerStyle}>
      <img src={product['url']} alt="" width="300px" height="300px"/>
      <div className="info w-[300px] h-[200px] bg-blue-600 rounded-br rounded-bl flex flex-col overflow-hidden">
        <p className='p-5 overflow-hidden'><span>{product['name']}</span></p>
        <p className='p-5 overflow-hidden'>Price : <span>₹ {product['price']}</span></p>
        <p className='p-5 overflow-hidden'>In Stock : <span>{parseInt(Math.random()*100)}</span></p>
      </div>
    </div>
  )
}
