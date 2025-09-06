import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider

import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Programs from "./pages/Programs";
import CSRPartnerships from "./pages/CSRPartnerships";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HelmetProvider> {/* Wrap the app with HelmetProvider */}
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/csr" element={<CSRPartnerships />} />
              <Route path="/contact" element={<ContactUs />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </HelmetProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;