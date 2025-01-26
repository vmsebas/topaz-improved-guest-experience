import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary/10">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Lisbon Tiles</h3>
            <p className="text-muted-foreground">
              Your authentic Portuguese home in the heart of Lisbon's historic Alfama district.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="text-muted-foreground not-italic">
              <p>Rua do Vigário 12</p>
              <p>Alfama</p>
              <p>1100-619 Lisboa</p>
              <p>Portugal</p>
              <p className="mt-2">+351 123 456 789</p>
            </address>
          </div>
          <div>
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