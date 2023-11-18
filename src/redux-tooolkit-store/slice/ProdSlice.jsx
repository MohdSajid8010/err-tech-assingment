import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false, allData: [], filterData: [], error: ""
}

export const ProdSlice = createSlice({
    name: 'fetch_products',
    initialState,
    reducers: {
        Prod_loading: (state) => {
            console.log(state.allData)
            state.loading = true;
            state.allData = [],
                state.error = "";
        },
        Prod_success: (state, actions) => {
            console.log(actions)
            state.loading = false;
            state.allData = actions.payload;
            state.error = "";
        },
        Prod_failure: (state, actions) => {
            state.loading = false;
            state.data = [];
            state.allData = [];
            state.error = actions.payload;
        },
        Prod_filtered: (state, action) => {
            state.filterData = state.allData.filter((obj) => obj.title.toUpperCase().includes(action.payload.toUpperCase()));
        }

    },
})

// Action creators are generated for each case reducer function
console.log(ProdSlice)
export const { Prod_loading, Prod_success, Prod_failure, Prod_filtered } = ProdSlice.actions

export default ProdSlice.reducer