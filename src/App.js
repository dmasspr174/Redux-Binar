import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import store from "./redux/store";
import PostDetails from "./pages/PostDetails";
import Header from "./components/Header";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Protected from "./components/Protected";
import RedirectIfProtected from "./components/RedirectIfProtected";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import Search from "./pages/Search";
import About from "./pages/About";

function App() {
  useEffect(() => {
    function handleContextMenu(e) {
      if (process.env.NODE_ENV !== "development") {
        e.preventDefault(); // prevents the default right-click menu from appearing
      }
    }
    // add the event listener to the component's root element
    const rootElement = document.getElementById("root");
    rootElement.addEventListener("contextmenu", handleContextMenu);
    // remove the event listener when the component is unmounted

    return () => {
      rootElement.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/movies/search" element={<Search />} />
            <Route path="/" element={<Home />} />

            <Route
              path="/register"
              element={
                <RedirectIfProtected>
                  <Register />
                </RedirectIfProtected>
              }
            />
            <Route
              path="/login"
              element={
                <RedirectIfProtected>
                  <Login />
                </RedirectIfProtected>
              }
            />

            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetails />} />

            <Route path="/about" element={<About />} />

            <Route
              path="/user/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
          </Routes>
          <ToastContainer theme="colored" />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
