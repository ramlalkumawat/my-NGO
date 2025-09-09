import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from "./contexts/AuthContext";

import Layout from "./components/layout/Layout";
import AdminLayout from "./components/layout/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";

// Public Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLogin from "./pages/Admin";
import Dashboard from "./pages/admin/Dashboard";
import ManagePrograms from "./pages/admin/Programs";
import ManageGallery from "./pages/admin/Gallery";
import ViewMessages from "./pages/admin/Messages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HelmetProvider>
          <AuthProvider>
            <Routes>
              {/* Public Site Routes */}
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Route>

              {/* Admin Site Routes */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                  <Route path="/admin/dashboard" element={<Dashboard />} />
                  <Route path="/admin/programs" element={<ManagePrograms />} />
                  <Route path="/admin/gallery" element={<ManageGallery />} />
                  <Route path="/admin/messages" element={<ViewMessages />} />
                </Route>
              </Route>
              
              {/* Fallback Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </HelmetProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;