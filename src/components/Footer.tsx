import { Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">
              © {currentYear} | Built with <span className="text-primary">security</span> in mind
            </span>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-accent">●</span> Available for opportunities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
