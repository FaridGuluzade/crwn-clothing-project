import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCurrentUser,
} from "./utils/firebase/firebase.utils";
import Home from "./router/home/home.component";
import Navigation from "./router/navigation/navigation.component";
import Authentication from "./router/authentication/authentication.component";
import Shop from "./router/shop/shop.component";
import Checkout from "./router/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
