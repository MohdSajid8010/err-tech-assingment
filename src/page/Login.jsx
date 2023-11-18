import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { loginInUser } from "../redux-tooolkit-store/slice/UserSlice";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
// import "../styles/signup.css"

const Login = () => {
  const [formData, setFormData] = useState({ email: "", pass: "" });
  const [isDisable, setIsdisable] = useState(true);
  const [passType, setpassType] = useState("password");

  let dispatch = useDispatch()





  function handle_submit(e) {
    e.preventDefault()

    dispatch(loginInUser(formData))
    setFormData({ email: "", pass: "" })

  }



  useEffect(() => {
    if (formData.email && formData.pass) {
      console.log(formData)
      setIsdisable(false)
    } else {
      setIsdisable(true)

    }
  }, [formData])

  return (
    <div className="signup_cont login_cont">

      <form>
        <h1>Login</h1>
        <label htmlFor="email"> Email</label>
        <input type="email" id="email" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }); }} placeholder="Email" />

        <label htmlFor="password"> Password</label>



        <div className="parent">
          <input type={passType} id="password" value={formData.pass} onChange={(e) => { setFormData({ ...formData, pass: e.target.value }); }} placeholder="Password" />
          {passType == "password" ? <div className="eye_icon" onClick={() => setpassType("text")}><FaEyeSlash /></div> :
            <div className="eye_icon" onClick={() => setpassType("password")}><FaEye /></div>}

        </div>


        <button type="button" onClick={handle_submit} disabled={isDisable}>Login</button>

      </form>


    </div>
  )
}

export default Login;