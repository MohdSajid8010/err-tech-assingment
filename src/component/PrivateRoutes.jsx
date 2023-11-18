import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { toast } from "react-toastify"

const PrivateRoutes = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null
    if (currentUser) {
        return <Outlet />
    } else {
        toast.info("Please login first!", {})
        return <Navigate to={"/login"} />
    }
}

export default PrivateRoutes