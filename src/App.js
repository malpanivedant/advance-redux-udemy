import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AppConstants from "./core/constants";
import { uiActions } from "./components/store/ui-slice";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./components/store/cart-action"
;
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification)

  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch]);


  useEffect(() => {
    // const sendCartData = async () => {
      // dispatch(
      //   uiActions.showNotification({
      //     staus: "pending",
      //     title: "Sending...",
      //     message: "Sending cart data!",
      //   })
      // );
      // const response = await fetch(`${AppConstants.referenceUrl}/cart.json`, {
      //   method: "PUT",
      //   body: JSON.stringify(cart),
      // });

      // if (!response.ok) {
      //   throw new Error("Sending cart data failed!");
      // }

      // const responseData = await response.json();

      // dispatch(
      //   uiActions.showNotification({
      //     status: "success",
      //     title: "Success",
      //     message: "Sent cart data successfully.",
      //   })
      // );
    // };

    if(isInitial){
      isInitial = false;
      return;
    }
    console.log(cart);
    dispatch(sendCartData(cart));
    // sendCartData().catch((error) => {
      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     title: "Error!",
      //     message: "Failed to send cart data",
      //   })
      // );
    // });
  }, [cart, dispatch]);

  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>

    </>
  );
}

export default App;
