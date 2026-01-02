import { Mail, Send, MapPin, Terminal, Github, Linkedin ,FileText} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setNotice(
      "Thank you for reaching out! For faster responses, please contact me directly via email: aruvasagachithan45@gmail.com"
    );
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/AruvasgaChithan", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aruvasaga-chithan/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:aruvasagachithan45@gmail.com",
      label: "Email",
    },
    {
      icon: FileText,
      href: "https://medium.com/@aruvasagachithan",
      label: "Medium",
    },

  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
              <span className="text-foreground">Let's </span>
              <span className="text-gradient-cyber">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating on security projects, CTF teams, or just
              want to chat about cybersecurity? Drop me a message!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="card-cyber rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">
                    contact_info.sh
                  </span>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a
                      href="mailto:aruvasagachithan45@gmail.com"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      aruvasagachithan45@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground/80">Coimbatore, India</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 card-cyber rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
              <div className="card-cyber rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-sm text-muted-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-sm text-muted-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-sm text-muted-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Let's talk about..."
                      required
                    />
                  </div>

                  <Button type="submit" variant="cyber" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  {notice && (
                    <div className="mt-4 text-sm font-mono text-primary bg-primary/10 border border-primary/30 rounded-lg p-3">
                      {notice}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
