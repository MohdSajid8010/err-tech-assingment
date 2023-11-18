import React, { useEffect } from 'react'
import getDatafromAPI from '../redux-tooolkit-store/actions/getDatafromAPI'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../component/Product'
import "../styles/home.css"
const Home = () => {

    let x = useSelector((store) => console.log(store))
    let { loading, allData, error } = useSelector((store) => store.products)
    let dispatch = useDispatch()
    useEffect(() => {
        if (allData.length == 0) {

            dispatch(getDatafromAPI("desc"))
        }
    }, [])

    function handleSort(e) {
        dispatch(getDatafromAPI(e.target.value))
    }


    if (loading) { return <h1 style={{textAlign:"center"}}>Loading...</h1> }
    if (error) { return <h1 style={{textAlign:"center"}}>Error...{error}</h1> }


    return (
        <div>


            {allData.length > 0 && (
                <div className='parent_org_box'>
                    <div className='orange_box'>
                        <div><span style={{ color: "white" }}>Home </span>
                            <span> / Shop</span>
                        </div>
                        <h3>shop</h3>
                        <div >
                            <select onChange={(e) => { handleSort(e); console.log("select", e.target.value) }}>
                                <option value="default">default</option>
                                <option value="desc">Desc</option>
                            </select>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center flex-wrap gap-3 cont_below_orange'>
                        {
                            allData.slice(0, 4).map((obj, i) => {
                                return <Product obj={obj} page="home" key={i} />
                            })
                        }
                    </div>
                </div>
            )}

            {allData.length > 0 && (
                <div>
                    <h3 style={{ textAlign: "center" }}>Related Product</h3>
                    <div className='d-flex p-2 justify-content-center flex-wrap gap-3'>
                        {
                            allData.slice(4).map((obj, i) => {
                                return <Product obj={obj} page="home" key={i} />
                            })
                        }
                    </div>
                </div>
            )}



        </div>

    )
}

export default Home