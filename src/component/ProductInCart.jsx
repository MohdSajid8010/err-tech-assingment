import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removeFromCart, updateCart } from '../redux-tooolkit-store/slice/cartslice';
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuMinus } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import "../styles/productInCart.css"


export const ProductInCart = ({ obj }) => {
    let dispatch = useDispatch();

    function handleRemoveTocart(obj) {
        dispatch(removeFromCart(obj))
        toast.success("item removed", {})
    }
    function handleIncrementItem(obj) {
        dispatch(updateCart({ id: obj.id, task: "inc" }))
    }

    function handleDecrementItem(obj) {
        dispatch(updateCart({ id: obj.id, task: "dec" }))
    }
    return (
        <div className="ProductInCart"  >
            <div className="img_cont">
                <img src={obj.image} className="card-img-top" alt="..." />
            </div>
            <div className="title">{obj.title}</div>

            <div className='counter'>

                {obj.count == 1 && <button className="" onClick={() => handleRemoveTocart(obj)}><RiDeleteBin6Line /></button>}

                {obj.count > 1 && <button className="" onClick={() => handleDecrementItem(obj)}><LuMinus /></button>}
                <button className="" >{obj.count}</button>
                <button className="" onClick={() => handleIncrementItem(obj)}><FaPlus /></button>
            </div>

            <div className="price">{obj.newPrice.toFixed(2)}$</div>
        </div>
    )
}
