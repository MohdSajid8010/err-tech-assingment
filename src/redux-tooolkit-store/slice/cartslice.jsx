import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartArr: [],
    },
    reducers: {
        addToCart: (state, actions) => {
            state.cartArr = [...state.cartArr, { ...actions.payload, newPrice: actions.payload.price, count: 1 }];
        },
        removeFromCart: (state, actions) => {
            state.cartArr = state.cartArr.filter((obj) => obj.id != actions.payload.id);
        },
        checkOutCart: (state) => {
            state.cartArr = [];
        },
        updateCart: (state, actions) => {
            console.log(actions)
            state.cartArr = helperUpdatePrice(state.cartArr, actions.payload.id, actions.payload.task);
        },
    }
})

function helperUpdatePrice(cartArr, id, task) {
    return cartArr.map((obj) => {
        if (obj.id == id) {

            if (task == "inc") {

                return { ...obj, newPrice: (obj.newPrice + obj.price), count: obj.count + 1 }
            } else {
                return { ...obj, newPrice: (obj.newPrice - obj.price), count: obj.count - 1 }

            }
        } else {
            return obj
        }
    })

}
export const { addToCart, removeFromCart, checkOutCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;