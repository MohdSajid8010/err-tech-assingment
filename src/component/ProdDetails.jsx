import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux-tooolkit-store/slice/cartslice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { TiStarFullOutline } from "react-icons/ti";
import { IoIosStarHalf } from "react-icons/io";
import "../styles/prodDetails.css"

const ProdDetails = ({ obj, obj2, obj3 }) => {
    console.log(obj, obj2, obj3)
    const [activeIndex, setActiveindex] = useState()
    const [radioCheckIndex, setRadioCheckIndex] = useState()
    const [isBtnDisable, setIsBtnDisable] = useState(true)

    let dispatch = useDispatch();
    let navigate = useNavigate()

    function handleAddTocart(obj) {

        dispatch(addToCart(obj))
        toast.success("item addded", {})
    }

    function handleRadioClick(i) {
        setRadioCheckIndex(i)
        console.log(i, activeIndex)
        if (activeIndex || activeIndex == 0) {
            setIsBtnDisable(false)
        }
    }
    function handleSizeBtnClick(i) {
        console.log(i, radioCheckIndex)

        setActiveindex(i)
        if (radioCheckIndex || radioCheckIndex == 0) {
            setIsBtnDisable(false)
        }
    }


    return (



        <div className="ProdDetails"  >


            <div className='left'>
                <div className='title'>{obj.title}</div>
                <div className="description">{obj.description}</div>
                <div className='img-cont'>
                    <div className='one-img-cont'><img src={obj.image} alt="..." /></div>
                    <div><img src={obj.image} alt="..." /></div>
                    <div><img src={obj.image} alt="..." /></div>
                </div>
            </div>

          <div className="midouter">
          <div className="mid">
                <div className="mid_ing_cont">
                    <img src={obj.image} alt="..." />
                </div>
                <div className="price">{obj.price}$</div>
            </div>
          </div>

            <div className="right">
                <div><strong>Reviews:</strong></div>
                <div>
                    {new Array(Math.floor(obj.rating.rate)).fill(false).map((e, i) => (
                        <span key={i}><TiStarFullOutline /></span>
                    ))}
                    <IoIosStarHalf />
                    <span>{obj.rating.rate}</span>
                </div>
                <div><strong>Select color:</strong></div>
                <div>
                    {[1, 2, 3, 4].map((val, i) => (
                        <input key={val} type="radio" name='color' className={`radio${val}`} checked={i == radioCheckIndex} onChange={() => handleRadioClick(i)} />
                    ))}
                </div>

                <div><strong>Select size:</strong></div>
                <div className='btn-cont'>
                    {[41, 42, 43, 44, 45, 46, 47, 48].map((val, i) => (

                        <button key={`btn-${i}`} onClick={() => handleSizeBtnClick(i)} className={`${i == activeIndex ? "active" : ""}`}>{val}</button>
                    ))}
                </div>
                <button className="add_to_cart_btn" disabled={isBtnDisable} onClick={() => handleAddTocart(obj)}>Add to cart</button>
            </div>

        </div>

    )
}

export default ProdDetails