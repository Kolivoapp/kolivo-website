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
import ProductForge from "./pages/products/Forge";
import ProductGate from "./pages/products/Gate";
import ProductLink from "./pages/products/Link";
import ProductAtlas from "./pages/products/Atlas";
import ProductVault from "./pages/products/Vault";
import ProductStudio from "./pages/products/Studio";
// Solutions
import SolutionB2B from "./pages/solutions/B2B";
import SolutionEnterprise from "./pages/solutions/Enterprise";
import SolutionImpact from "./pages/solutions/Impact";
import SolutionPublicSector from "./pages/solutions/PublicSector";
import SolutionColiving from "./pages/solutions/Coliving";
// Other pages
import SecurityTrust from "./pages/SecurityTrust";
import Company from "./pages/Company";
// CompanyCareers moved to ./pages/company/Careers
import Contact from "./pages/Contact";
import LegalPrivacy from "./pages/legal/Privacy";
import LegalTerms from "./pages/legal/Terms";
import LegalCookies from "./pages/legal/Cookies";
import LegalAccessibility from "./pages/legal/Accessibility";
import CompanyPress from "./pages/company/Press";
import CompanyCareersNew from "./pages/company/Careers";

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
      <Route path="/products/forge" component={ProductForge} />
      <Route path="/products/gate" component={ProductGate} />
      <Route path="/products/link" component={ProductLink} />
      <Route path="/products/atlas" component={ProductAtlas} />
      <Route path="/products/vault" component={ProductVault} />
      <Route path="/products/studio" component={ProductStudio} />
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
      <Route path="/company/careers" component={CompanyCareersNew} />
      <Route path="/company/press" component={CompanyPress} />
      {/* Contact */}
      <Route path="/contact" component={Contact} />
      {/* Legal */}
      <Route path="/legal/privacy" component={LegalPrivacy} />
      <Route path="/legal/terms" component={LegalTerms} />
      <Route path="/legal/cookies" component={LegalCookies} />
      <Route path="/legal/accessibility" component={LegalAccessibility} />
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
