import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
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

  if (loading) return <Loading />;

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        {/* Root always redirects to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Protected Routes */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/blog/update/:id" element={isAuthenticated ? <UpdateBlog /> : <Navigate to="/login" />} />

        {/* Public Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Detail />} />

        {/* Auth Pages */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/home" />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/home" />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
