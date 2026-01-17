import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
// Products - Official KOLIVO™ products only
import ProductHub from "./pages/products/Hub";
import ProductHalo from "./pages/products/Halo";
import ProductLens from "./pages/products/Lens";
import ProductNest from "./pages/products/Nest";
import ProductSeed from "./pages/products/Seed";
// Solutions
import SolutionB2B from "./pages/solutions/B2B";
import SolutionEnterprise from "./pages/solutions/Enterprise";
import SolutionImpact from "./pages/solutions/Impact";
import SolutionPublicSector from "./pages/solutions/PublicSector";
import SolutionColiving from "./pages/solutions/Coliving";
// Other pages
import SecurityTrust from "./pages/SecurityTrust";
import Company from "./pages/Company";
import CompanyCareers from "./pages/CompanyCareers";
import Contact from "./pages/Contact";
import LegalPrivacy from "./pages/legal/Privacy";
import LegalTerms from "./pages/legal/Terms";
import LegalCookies from "./pages/legal/Cookies";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Products - Official KOLIVO™ products */}
      <Route path="/products/hub" component={ProductHub} />
      <Route path="/products/halo" component={ProductHalo} />
      <Route path="/products/lens" component={ProductLens} />
      <Route path="/products/nest" component={ProductNest} />
      <Route path="/products/seed" component={ProductSeed} />
      {/* Solutions */}
      <Route path="/solutions/coliving" component={SolutionColiving} />
      <Route path="/solutions/b2b" component={SolutionB2B} />
      <Route path="/solutions/enterprise" component={SolutionEnterprise} />
      <Route path="/solutions/impact" component={SolutionImpact} />
      <Route path="/solutions/public-sector" component={SolutionPublicSector} />
      {/* Security & Trust */}
      <Route path="/security-trust" component={SecurityTrust} />
      {/* Company */}
      <Route path="/company" component={Company} />
      <Route path="/company/careers" component={CompanyCareers} />
      {/* Contact */}
      <Route path="/contact" component={Contact} />
      {/* Legal */}
      <Route path="/legal/privacy" component={LegalPrivacy} />
      <Route path="/legal/terms" component={LegalTerms} />
      <Route path="/legal/cookies" component={LegalCookies} />
      {/* Fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
