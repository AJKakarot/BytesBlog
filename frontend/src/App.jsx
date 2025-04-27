// App.js
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import Blogs from "../src/pages/Blogs";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Dashboard from "../src/pages/Dashboard";
import Creators from "./pages/Creators";
import Detail from "./pages/Detail";
import UpdateBlog from "./dashboard/UpdateBlog";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Loading from "./components/Loading";

function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/login", "/register"].includes(location.pathname);

  const { loading, isAuthenticated } = useAuth();
  const token = localStorage.getItem("jwt");

  // ⚡ Show loading spinner until auth (and any global fetches) finish
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog/:id" element={<Detail />} />
        <Route path="/blog/update/:id" element={<UpdateBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
