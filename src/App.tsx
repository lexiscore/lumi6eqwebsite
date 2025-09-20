
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";

// Marketing-only app: remove data fetching/auth providers

// Component to handle scrolling to hash fragments
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Add a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top of the page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const App = () => {
  // Prevent pinch zooming on mobile for better UX
  useEffect(() => {
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('touchmove', preventZoom, { passive: false });
    
    return () => {
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner position="bottom-center" closeButton={true} />
        <BrowserRouter>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
