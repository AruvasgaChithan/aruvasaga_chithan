import { Target, Trophy, Award, Code } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Trophy, value: '2x', label: '1st Place in CTF' },
    { icon: Award, value: 'eJPT', label: 'Certification' },
    { icon: Code, value: '6+', label: 'Security Tools' },
    { icon: Target, value: '8.71', label: 'CGPA' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
              <span className="text-foreground">Who </span>
              <span className="text-gradient-cyber">Am I?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar area */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Terminal window */}
                <div className="absolute inset-0 card-cyber rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                    <span className="w-3 h-3 rounded-full bg-destructive" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-accent" />
                    <span className="font-mono text-xs text-muted-foreground ml-2">
                      about.sh
                    </span>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <p className="text-muted-foreground">
                      <span className="text-accent">$</span> cat profile.txt
                    </p>
                    <div className="mt-4 space-y-2 text-foreground/80">
                      <p><span className="text-primary">Name:</span> Aruvasaga Chithan A</p>
                      <p><span className="text-primary">Role:</span> Cyber Security Student</p>
                      <p><span className="text-primary">Focus:</span> Offensive Security</p>
                      <p><span className="text-primary">College:</span> Sree Sakthi Engineering</p>
                      <p><span className="text-primary">Location:</span> Coimbatore, India</p>
                      <p><span className="text-primary">Status:</span> <span className="text-accent">Active</span></p>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      <span className="text-accent">$</span> <span className="animate-pulse">_</span>
                    </p>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl opacity-50" />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a B.E. Computer Science Engineering (Cyber Security) student at Sree Sakthi 
                Engineering College, Coimbatore. With a passion for using innovation to improve security, 
                I focus on offensive testing, manual exploitation, and AI-driven automation.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Skilled with Burp Suite, OWASP ZAP, and Metasploit, I've built automated scanners 
                and competed in national and international CTFs—winning multiple 1st place finishes. 
                I ethically exploit vulnerabilities in controlled environments and deliver actionable fixes.
              </p>
              <div className="mb-8 p-4 card-cyber rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground font-mono">
                  <span className="text-primary">Experience:</span> 
                  CTFs, Bug Bounty & Security Research
                  <br />
                  <span className="text-xs">
                    Real-world vulnerability research, capture-the-flag competitions, 
                    reporting security issues responsibly, and building custom security tools.
                  </span>

                </p>
              </div>



              {/* Stats */}
              <div className="grid grid-cols-4 gap-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 card-cyber rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold font-mono text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
