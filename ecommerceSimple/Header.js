import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { ContextCreate } from './ContextCreate';
const Header = () => {
  const {totalShow}=useContext(ContextCreate)
  return (
    <>
        <div className='col-md-12 border border-dark row'>
            <div className='col-md-9'>
            <h1 className="text-danger ps-5">Ecom.</h1>
            </div>
            <div className='col-md-3 ps-2 borderLeft border-dark'>
            {totalShow.length<0 ?<FaShoppingCart size={"2rem"} className="mt-2"/>:
            <div><FaShoppingCart size={"2rem"} className="mt-2"/><sup>{totalShow}</sup></div> }
            </div>
        </div>

        
    </>
  )
}

export default Header