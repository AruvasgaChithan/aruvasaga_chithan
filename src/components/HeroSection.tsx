import { Shield, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import TypingEffect from './TypingEffect';

const HeroSection = () => {
  const roles = [
    'Ethical Hacker',
    'Penetration Tester',
    'Security Researcher',
    'CTF Champion',
    'Security Tool Developer',
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              root@kali:~# whoami
            </span>
          </div>
          {/* Profile Image */}
          <div className="flex justify-center mb-8 animate-slide-up">
            <img
              src="/image.png"
              alt="Aruvasaga Chithan"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-[0_0_30px_rgba(0,255,204,0.35)]"
            />
          </div>


          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-6 animate-slide-up whitespace-nowrap">
            <span className="text-foreground">Aruvasaga Chithan A</span>
          </h1>


          {/* Typing effect */}
          <div className="text-2xl md:text-3xl font-mono text-primary mb-8 h-12 animate-slide-up stagger-1">
            <TypingEffect texts={roles} speed={80} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up stagger-3">
            <Button variant="cyber" size="lg" asChild>
              <a href="#projects">
                <Shield className="w-5 h-5 mr-2" />
                View My Work
              </a>
            </Button>
            <Button variant="cyber-outline" size="lg" asChild>
              <a href="/Aruvasaga chithan A.pdf" download>
                Download CV
              </a>
            </Button>

          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up stagger-4">
            <a
              href="https://github.com/AruvasgaChithan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aruvasaga-chithan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:aruvasagachithan45@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
