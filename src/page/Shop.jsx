import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Product from '../component/Product'
import ProdDetails from '../component/ProdDetails'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Shop = () => {
    let { id } = useParams()
    console.log(id)

    let navigate = useNavigate()
   

    // let x=useSelector((store)=>console.log(store.products))
    let { loading, allData, error } = useSelector((store) => store.products)


    if (loading) { return <h1>Loading...</h1> }
    if (error) { return <h1>Error...{error}</h1> }

    console.log(allData, typeof id, allData[parseInt(id)])
    return (
        <div>


            {allData.length > 0 && (
                <div className='parent_org_box'>
                    <div className='orange_box'>
                        <div className='home-shop'>
                            <span style={{ color: "white" }}>Home </span>
                            <span> / Products Details</span>
                        </div>
                        <h3>Product Details</h3>
                        <div className='left-right-btn'>
                            {id > 3 && <button onClick={() => navigate(`/shop/${id - 1}`)}><FaChevronLeft /></button>}
                            {id < 18 && <button onClick={() => navigate(`/shop/${parseInt(id) + 1}`)}><FaChevronRight /></button>}
                        </div>

                    </div>

                    <div className='d-flex justify-content-center flex-wrap gap-3 cont_below_orange'>
                        <ProdDetails obj={allData[id - 1]} obj2={allData[id - 2]} ob3={allData[id - 3]} page="home" key={id} />
                    </div>
                </div>
            )}

            {allData.length > 0 && (
                <div>
                    <h3 style={{ textAlign: "center" }}>Related Product</h3>
                    <div className='d-flex p-2 justify-content-center flex-wrap gap-3'>
                        {
                            allData.filter((obj) => obj.id != id).map((obj, i) => {
                                return <Product obj={obj} page="home" key={i} />
                            })
                        }
                    </div>
                </div>
            )}



        </div>

    )
}

export default Shop