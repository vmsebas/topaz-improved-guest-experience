import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Lisbon Tiles</h3>
            <p className="text-muted-foreground">
              Your authentic Portuguese home in the heart of Lisbon's historic Alfama district.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="text-muted-foreground not-italic">
              <p>Travessa da Trindade 18</p>
              <p>1200-469 Lisboa</p>
              <p>Portugal</p>
              <p className="mt-2">+351 123 456 789</p>
              <p>info@lisbontiles.com</p>
            </address>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/terms" className="hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};