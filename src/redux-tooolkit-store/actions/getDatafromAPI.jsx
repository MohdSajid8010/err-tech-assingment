import { Prod_failure, Prod_loading, Prod_success } from "../slice/ProdSlice";
import axios from "axios"

let urlsort = "https://fakestoreapi.com/products?sort=desc"
let urlgetprod = "https://fakestoreapi.com/products"
const getDatafromAPI = (sortType) => {

    return (dispatch) => {
        dispatch(Prod_loading());
        axios.get(sortType == "desc" ? urlsort : urlgetprod)
            .then((res) => {
                console.log(res, res.data);
                dispatch(Prod_success(res.data))
            }).catch((e) => {
                console.log(e);
                dispatch(Prod_failure(e.message));
            })
    }
}

export default getDatafromAPI