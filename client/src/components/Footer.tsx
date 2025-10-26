import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">Carve Teak Global</h3>
            <p className="text-primary-foreground/70 text-sm mb-2 italic">The Soul of Teak, Carved by Hand</p>
            <p className="text-primary-foreground/70 text-xs mb-4">GAU VEDA GLOBAL LLP</p>
            <p className="text-primary-foreground/80 mb-6">
              Crafting timeless furniture with traditional techniques and premium
              Sagwan & Teak wood since generations.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover-elevate hover-scale-110 flex items-center justify-center transition-smooth"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover-elevate hover-scale-110 flex items-center justify-center transition-smooth"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover-elevate hover-scale-110 flex items-center justify-center transition-smooth"
                data-testid="link-twitter"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground underline-animate transition-smooth"
                  data-testid="link-footer-home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/our-story"
                  className="text-primary-foreground/80 hover:text-primary-foreground underline-animate transition-smooth"
                  data-testid="link-footer-our-story"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/the-craft"
                  className="text-primary-foreground/80 hover:text-primary-foreground underline-animate transition-smooth"
                  data-testid="link-footer-the-craft"
                >
                  The Craft
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-primary-foreground/80 hover:text-primary-foreground underline-animate transition-smooth"
                  data-testid="link-footer-products"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground underline-animate transition-smooth"
                  data-testid="link-footer-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  SNO.112/1 NR. KHANDOBA MANDIR<br />
                  PUNAWALE, PUNE CITY<br />
                  PUNE-411033, MAHARASHTRA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 7758067875</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Carvetealglobal@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © {currentYear} Carve Teak Global - GAU VEDA GLOBAL LLP. All rights reserved. Handcrafted with
            love in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
