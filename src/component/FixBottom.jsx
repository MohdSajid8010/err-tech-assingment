import React, { useRef, useState } from 'react'
import { useThemeContext } from '../context/ThemeContext';
import { defaultTheme, customeTheme } from '../utils/themeOptions';
import { Prod_filtered } from '../redux-tooolkit-store/slice/ProdSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";

const FixBottom = () => {
    const { theme, setTheme } = useThemeContext();
    const [searchStr, setSearchStr] = useState("");
    let dispatch = useDispatch();
    let navigate = useNavigate()

    const btnRef = useRef(null);

    // console.log("inside FixBottom", theme)
    function toggleTheme() {


        if (theme.label == "defaultTheme") {
            setTheme(customeTheme)
            localStorage.setItem("theme", JSON.stringify(customeTheme))
        } else {
            setTheme(defaultTheme)
            localStorage.setItem("theme", JSON.stringify(defaultTheme))

        }
    }


    function handleKeyDown(e) {
        if (e.key == "Enter") {

            // dispatch(Prod_filtered(searchStr))
            console.log(btnRef)
            btnRef.current.click()
            // navigate(`/search/${searchStr}`)
        }
    }
    function handleSearch() {
        // dispatch(Prod_filtered(searchStr))
        navigate(`/search/${searchStr}`)

    }

    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="search" value={searchStr} onChange={(e) => setSearchStr(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} />
                            <button onClick={handleSearch} ref={btnRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Search</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='fixBottom'>


                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop"><IoSearchSharp /></button>






                <button onClick={toggleTheme}>
                    <div className="form-check form-switch" >
                        <input className="form-check-input" type="checkbox" role="switch" />
                    </div>
                </button>

            </div>
        </>
    )
}

export default FixBottom