import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { updatePasswordUser } from "../redux-tooolkit-store/slice/UserSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

const MyAccount = () => {
  const [formData, setFormData] = useState({ email: "", currpass: "", newpass: "", confmpass: "" });
  const [isDisable, setIsdisable] = useState(true);
  const [passType, setpassType] = useState("password");

  let dispatch = useDispatch()
  let navigate = useNavigate()



  let users = JSON.parse(localStorage.getItem("users")) || []
  let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null
  function handle_submit(e) {
    e.preventDefault()
    if (formData.newpass != formData.confmpass) {
      toast.error("new password and confirm password not match!"); return;
    }
    for (let obj of users) {
      if (obj.pass != formData.currpass) {
        toast.error("Please Enter current password correctly!"); return;
      }
    }
    dispatch(updatePasswordUser({ email: formData.email, pass: formData.newpass }))
    localStorage.setItem("currentUser", JSON.stringify({ email: formData.email, pass: formData.newpass }))
    setFormData({ ...formData, currpass: "", newpass: "", confmpass: "" })
    toast.success("password updated succesfully!"); return;

  }



  useEffect(() => {
    if (formData.currpass && formData.newpass && formData.confmpass) {
      console.log(formData)
      setIsdisable(false)
    } else {
      setIsdisable(true)

    }

  }, [formData])

  useEffect(() => {

    if (currentUser) {
      setFormData({ ...formData, email: currentUser.email })
    } else {
      toast.info("Please login!");
      navigate("/login")
    }

  }, [])
  return (
    <div className="signup_cont myaccount_cont">

      <form>
        <h2>Update password</h2>
        <label htmlFor="email"> Email</label>
        <input type="email" id="email" value={formData.email} placeholder="Email" />

        <label htmlFor="Currentpassword">Current Password</label>
        <input type={passType} id="Currentpassword" value={formData.currpass} onChange={(e) => { setFormData({ ...formData, currpass: e.target.value }); }} placeholder="Password" />

        <label htmlFor="newpassword">New Password</label>
        <input type={passType} id="newpassword" value={formData.newpass} onChange={(e) => { setFormData({ ...formData, newpass: e.target.value }); }} placeholder="Password" />

        <label htmlFor="confirmpassword">confirm Password</label>

        <div className="parent">
          <input type={passType} id="confirmpassword" value={formData.confmpass} onChange={(e) => { setFormData({ ...formData, confmpass: e.target.value }); }} placeholder="Password" />
          {passType == "password" ? <div className="eye_icon" onClick={() => setpassType("text")}><FaEyeSlash /></div> :
            <div className="eye_icon" onClick={() => setpassType("password")}><FaEye /></div>}

        </div>


        <button type="button" onClick={handle_submit} disabled={isDisable}>Update password</button>

      </form>


    </div>
  )
}

export default MyAccount;