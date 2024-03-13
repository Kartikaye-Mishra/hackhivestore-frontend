import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./success.scss"
import { MdClose } from "react-icons/md";
import { Context } from '../../utils/context';
import '../Cart/CartItem/CartItem.scss'
export default function Success() {

  
  return (
    <div className='success_container'>
      <div className="success_main">

        <h2 className='success_h2'>
        Order Placed Successfully
        </h2>
<br></br>
<Link to="/">
        <h4 className='success_h4'>
            Continue Shopping
        </h4>
        </Link>
      </div>
    </div>
  )

  

}
