import { ExternalLink, Github, Lock, Bug, Shield, Globe, Network } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'PentestPilot v1.0',
      description: 'AI-assisted automated web vulnerability scanner with 82% accuracy rate in detecting critical vulnerabilities. Features automated PDF reporting with CVSS-based risk scoring.',
      tags: ['Python', 'AI', 'Security', 'Automation'],
      icon: Bug,
      github: 'https://github.com/AruvasgaChithan',
      demo: 'https://github.com/AruvasgaChithan/Pentestpilot-V1.0',
    },
    {
      title: 'Network Vulnerability Scanner1',
      description: 'Network vulnerability scanner with 94% success rate in identifying common misconfigurations. Engineered with GUI for enhanced usability and clear reporting.',
      tags: ['Python', 'Networking', 'GUI'],
      icon: Globe,
      github: 'https://github.com/AruvasgaChithan',
      demo: 'https://github.com/AruvasgaChithan/Vulnerability-Scanner',
    },
    {
      title: 'CLI-PortScanner',
      description: 'High-speed port scanner that improved reconnaissance efficiency by 50% through TCP SYN and UDP scanning techniques.',
      tags: ['Python', 'CLI', 'Networking'],
      icon: Shield,
      github: 'https://github.com/AruvasgaChithan',
      demo: 'https://github.com/AruvasgaChithan/CLI-PortScanner',
    },
    {
      title: 'Wild Guard',
      description: 'AI-powered elephant detection solution designed to prevent human-wildlife conflict through instant alerts and automated notifications.',
      tags: ['AIML', 'OpenCV', 'Twillo API'],
      icon: Network,
      github: 'https://github.com/AruvasgaChithan',
      demo: 'https://github.com/AruvasgaChithan/WildGuard',
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
              <span className="text-foreground">Featured </span>
              <span className="text-gradient-cyber">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of security tools and projects I've built to learn and contribute to the community.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group card-cyber rounded-lg overflow-hidden hover:border-primary/50 transition-all"
              >
                {/* Project header */}
                <div className="p-6 border-b border-border bg-secondary/30">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-mono text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more */}
          <div className="text-center mt-12">
            <Button variant="cyber-outline" asChild>
              <a href="https://github.com/AruvasgaChithan" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All My Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
