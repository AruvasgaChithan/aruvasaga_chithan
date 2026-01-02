import { 
  Shield, 
  Terminal, 
  Network, 
  Lock, 
  Bug, 
  Server,
  Code,
  Database,
  Scan,
  Key,
  Send,
  Workflow
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Vulnerability Assessment & Penetration Testing',
      icon: Shield,
      skills: ['Metasploit', 'Burp Suite', 'OWASP ZAP', 'Nmap', 'Nessus', 'Wireshark', 'OpenVAS','Manual Testing'],
    },
    {
      title: 'Security Concepts & Operations',
      icon: Lock,
      skills: ['OWASP Top 10', 'CVE', 'CVSS', 'API Security', 'Docker', 'Active Directory', 'SIEM'],
    },
    {
      title: 'Programming & Scripting',
      icon: Code,
      skills: ['Python', 'Bash', 'C++', 'JavaScript'],
    },
    {
      title: 'Operating Systems & Networking',
      icon: Network,
      skills: ['Kali Linux', 'Windows Server', 'Ubuntu', 'TCP/IP', 'DNS', 'HTTP/HTTPS'],
    },
  ];

  const tools = [
    { name: 'Kali Linux', icon: Terminal },
    { name: 'Burp Suite', icon: Bug },
    { name: 'Metasploit', icon: Shield },
    { name: 'Nmap', icon: Scan },
    { name: 'Wireshark', icon: Network },
    { name: 'OWASP ZAP', icon: Lock },
    { name: 'Nessus', icon: Server },
    { name: 'Postman', icon: Workflow },
  ];

  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // Technical Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
              <span className="text-foreground">Skills & </span>
              <span className="text-gradient-cyber">Tools</span>
            </h2>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card-cyber rounded-lg p-6 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-mono text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono rounded border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-mono text-foreground">
              <span className="text-primary">&lt;</span>
              Favorite Tools
              <span className="text-primary">/&gt;</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 card-cyber rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer"
              >
                <tool.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-mono text-sm text-foreground/80 group-hover:text-foreground">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
