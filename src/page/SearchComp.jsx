import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../component/Product'
import { useParams } from 'react-router-dom'
import { Prod_filtered } from '../redux-tooolkit-store/slice/ProdSlice'

const SearchComp = () => {

    let dispatch = useDispatch()
    let { keyword } = useParams()

    console.log(keyword)
    useEffect(() => {
        if (keyword) {

            dispatch(Prod_filtered(keyword))
        } else {
            dispatch(Prod_filtered(""))

        }
    }, [keyword])

    // let x = useSelector((store) => console.log(store))
    let { loading, filterData, error } = useSelector((store) => store.products)





    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{keyword} </h1>

            {filterData.length > 0 && (
                <div>
                    <div className='d-flex p-2 justify-content-evenly flex-wrap'>
                        {
                            filterData.map((obj, i) => {
                                return <Product obj={obj} page="home" key={i} />
                            })
                        }
                    </div>
                </div>
            )}



        </div>

    )
}

export default SearchComp