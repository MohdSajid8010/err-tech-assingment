
// UserSlice
import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export const UserSlice = createSlice({
    name: 'user',
    initialState: { users: [], currentUser: null },
    reducers: {
        signUpUser: (state, actions) => {
            console.log(state.users, actions.payload)
            state.users = helperSignUpUser(state.users, actions.payload);
        },
        loginInUser: (state, actions) => {
            console.log(state.users, actions.payload)
            state.currentUser = helperLoginInUser(state.users, actions.payload);
        },
        updatePasswordUser: (state, actions) => {
            console.log(actions)
            state.currentUser = actions.payload;

        },


    },
})


function helperSignUpUser(users, formData) {
    console.log(users, users.length, formData)
    users = JSON.parse(localStorage.getItem("users")) || []
    for (let user of users) {
        if (user.email == formData.email) {
            toast.error("User is already rejister,Please Login!"); return users;
        }
    }

    localStorage.setItem("users", JSON.stringify([...users, formData]));
    toast.success("Successfully Sign up!");
    console.log([...users, formData])
    return [...users, formData]

}

function helperLoginInUser(users, formData) {
    console.log(users, users.length, formData)
    users = JSON.parse(localStorage.getItem("users")) || []
    for (let user of users) {
        if (user.email == formData.email && user.pass != formData.pass) {
            toast.error("Incorrect password!"); return null;
        } else if (user.email == formData.email && user.pass == formData.pass) {
            toast.success("Successfully Login!");
            localStorage.setItem("currentUser", JSON.stringify(formData));
            return formData;
        }
    }

    // if (!users.map((obj) => obj.email).includes(formData.email)) {
    toast.error("Email not exist!,Please sign up!"); return null;
    // }



}

// Action creators are generated for each case reducer function
export const { signUpUser, loginInUser, updatePasswordUser } = UserSlice.actions

export default UserSlice.reducer
