import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Mortgage from "@/pages/Mortgage";
import FamilyFinance from "@/pages/FamilyFinance";
import Credit from "@/pages/Credit";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MotionConfig reducedMotion="user">
        <Toaster />
        <Sonner />
        <HashRouter>
          <Layout>
            <Routes>
              <Route path={ROUTE_PATHS.HOME} element={<Home />} />
              <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
              <Route path={ROUTE_PATHS.SERVICES} element={<Services />} />
              <Route path={ROUTE_PATHS.MORTGAGE} element={<Mortgage />} />
              <Route path={ROUTE_PATHS.FAMILY_FINANCE} element={<FamilyFinance />} />
              <Route path={ROUTE_PATHS.CREDIT} element={<Credit />} />
              <Route path={ROUTE_PATHS.TESTIMONIALS} element={<Testimonials />} />
              <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
            </Routes>
          </Layout>
          <WhatsAppButton />
        </HashRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;