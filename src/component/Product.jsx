import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiExpand } from "react-icons/bi";
import { FaShoppingBag } from 'react-icons/fa';

const Product = ({ obj, page }) => {
    let navigate = useNavigate()
    return (
        <div className="card" style={{ width: "18rem" }} >
            <div className='d-flex justify-content-between'>
                <button onClick={() => navigate(`/shop/${obj.id}`)}><BiExpand /></button>
                <button onClick={() => navigate(`/cart`)}>  <FaShoppingBag className="icon" /></button>
            </div>
            <img src={obj.image} className="card-img-top" alt="..." />
            <div className="card-body">

                {/* <h5 className="card-title">{obj.category}</h5> */}
                <h5 className="card-title">{obj.title.slice(0, 22)}</h5>
                <h5 className="card-title">{obj.price}$</h5>

            </div>
        </div>
    )
}

export default Product