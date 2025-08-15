import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sujal-raikar-96a9742a3/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/sujalraikar2004',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:sujalraikar84@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      href: 'tel:+916364638991',
      label: 'Phone'
    },
    {
      icon: MessageCircle, // Using MessageCircle for WhatsApp
      href: 'https://wa.me/916364638991',
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className="relative z-10 mt-20">
      <div className="glass-card mx-4 mb-8 p-8 lg:mx-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Sujal Raikar</h3>
              <p className="text-muted-foreground">
                Computer Science Engineering Student specializing in MERN Stack Development & AI/ML
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Belagavi, Karnataka, India</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">Achievements</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-glass/50 hover:bg-glass border border-glass-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>sujalraikar84@gmail.com</div>
                <div>+91 6364638991</div>
              </div>
            </div>
          </div>

          <div className="border-t border-glass-border mt-8 pt-6 text-center text-muted-foreground">
            <p>&copy; {currentYear} Sujal Raikar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;