import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../component/Product'
import { ProductInCart } from '../component/ProductInCart'
import { checkOutCart } from '../redux-tooolkit-store/slice/cartslice'
import { toast } from 'react-toastify'
import "../styles/cart.css"

const Cart = () => {

  let dispatch = useDispatch()
  // useEffect(() => {
  //     dispatch(getDatafromAPI())
  // }, [])

  let x = useSelector((store) => console.log(store))
  let cartArr = useSelector((store) => store.cartArr.cartArr)
  console.log(cartArr)



  function handleCheckOut() {
    dispatch(checkOutCart())
    toast.success("item Purchased")
  }
  const sum = (cartArr) => {
    let sum = 0;
    cartArr.forEach(obj => {
      sum = sum + obj.newPrice

    });
    console.log(sum)
    return sum.toFixed(2)
  }
  return (
    <div className='cart_cont'>

      {cartArr.length > 0 && (
        <div className='d-flex p-2 justify-content-evenly align-items-center flex-column'>
          <h3>shopping cart new</h3>
          {
            cartArr.map((obj, i) => {
              return <ProductInCart obj={obj} page="home" key={i} />
            })
          }
        </div>

      )}

      <div className='d-flex p-2 justify-content-evenly align-items-center flex-column  gap-3 checkout'>
        <div><strong>Total:</strong><span>{sum(cartArr)}$</span></div>
        <div><strong>Shipping:</strong><span>Free shipping</span></div>
        <button onClick={handleCheckOut}>Proceed to checkout</button>
      </div>



    </div>

  )
}

export default Cart