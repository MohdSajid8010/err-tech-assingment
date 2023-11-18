import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux-tooolkit-store/slice/UserSlice";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/signup.css"

const SignUp = () => {
  const [formData, setFormData] = useState({ email: "", pass: "", cpass: "" });
  const [isDisable, setIsdisable] = useState(true);
  const [passType, setpassType] = useState("password");

  let dispatch = useDispatch()





  function handle_submit(e) {
    e.preventDefault()
    console.log("in form", formData)
    if (formData.pass.length != 4) {
      toast.warn("password should be atleast 4 char!", {});
      return;
    }
    if (formData.pass != formData.cpass) {
      toast.error("password not match!", {});
      return;
    }
    dispatch(signUpUser(formData))
    setFormData({ email: "", pass: "", cpass: "" })


  }



  useEffect(() => {
    if (formData.email && formData.pass && formData.cpass) {
      console.log(formData)
      setIsdisable(false)
    } else {
      setIsdisable(true)

    }
  }, [formData])
  return (
    <div className="signup_cont">

      <form>
        <h1>Signup</h1>
        <label htmlFor="email"> Email</label>
        <input type="email" id="email" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }); }} placeholder="Email" />

        <label htmlFor="password"> Password</label>
        <input type="password" id="password" value={formData.pass} onChange={(e) => { setFormData({ ...formData, pass: e.target.value }); }} placeholder="Password" />

        <label htmlFor="cpass"> Confirm Password </label>

        <div className="parent">
          <input type={passType} id="cpass" value={formData.cpass} onChange={(e) => { setFormData({ ...formData, cpass: e.target.value }); }} placeholder="Confirm Password" />
          {passType == "password" ? <div className="eye_icon" onClick={() => setpassType("text")}><FaEyeSlash /></div> :
            <div className="eye_icon" onClick={() => setpassType("password")}><FaEye /></div>}

        </div>
        <button type="button" onClick={handle_submit} disabled={isDisable}>Sign Up</button>

      </form>


    </div>
  )
}

export default SignUp;