import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

import SingleBook from "./components/SingleBook";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./context/AuthProvider";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/search" element={<SearchResult />} />
              <Route path="/book/:bookId" element={<SingleBook />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
}

export default App;
