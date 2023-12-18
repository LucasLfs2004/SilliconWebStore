import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../services/Requests";
import { calculatePayment } from "../../store/actions/paymentActions";

import { useQuery } from "@tanstack/react-query";

export const useHome = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const { data, isError, isLoading,} = useQuery({
    queryFn: async () => await getProducts(),
  });
    
    useEffect(() => {
        dispatch(calculatePayment(cart));
    }, [cart])

    // console.log("products", data)

    return {
        products: data,
        isError,
        isLoading,
        cart
    }
}