const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-proxima font-bold text-secondary-foreground mb-4">
              Audience Impact
            </h3>
            <p className="text-secondary-foreground/80 text-sm mb-6 leading-relaxed">
              Crowdproducing Filipino films with transparency and clear terms. 
              Join the movement to support local cinema and potentially earn returns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-proxima font-semibold text-secondary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors">
                  Browse Films
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/about" className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-proxima font-semibold text-secondary-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/help" className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/investor-guide" className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors">
                  Investor Guide
                </a>
              </li>
              <li>
                <a href="/risk-disclosure" className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors">
                  Risk Disclosure
                </a>
              </li>
            </ul>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a href="/terms" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/cookies" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} Audience Impact. All rights reserved.
            </p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-secondary-foreground/10">
            <p className="text-secondary-foreground/60 text-xs text-center">
              <strong>Investment Risk Warning:</strong> Film investments are high-risk and may result in loss. 
              Only invest what you can afford to lose. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
