import { Award, Calendar, Trophy, Star, Medal, ArrowUpRight } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "eJPT (eLearning Junior Penetration Tester)",
      issuer: "INE Security",
      date: "Oct 2025",
      score: "82%",
      color: "accent",
      verify: "https://certs.ine.com/38a880b7-0edf-4625-8eb6-0c0e2d2a9bb1#acc.NXFkgJer",
    },
    {
      name: "Ethical Hacking",
      issuer: "NPTEL",
      date: "Nov 2025",
      score: "75%",
      color: "primary",
      verify: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs142/Course/NPTEL25CS142S105430605410387484.pdf",
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Coursera",
      date: "Aug 2025",
      color: "accent",
      verify: "https://www.coursera.org/account/accomplishments/specialization/PA7V8FSFIKE2",
    },
    {
      name: "Jr. Penetration Tester",
      issuer: "TryHackMe",
      date: "Jan 2025",
      color: "primary",
      verify: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-00E2FDTUBX.pdf",
    },
    {
      name: "Web Fundamentals",
      issuer: "TryHackMe",
      date: "Jan 2025",
      color: "primary",
      verify: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-MJEKSQIVEM.pdf",
    },
    {
      name: "Computer Networks and Internet Protocol",
      issuer: "NPTEL",
      date: "Apr 2025",
      score: "58%",
      color: "accent",
      verify: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs15/Course/NPTEL25CS15S124360292404269885.pdf",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "SSEC Visionary Award 2K25",
      subtitle: "Tech Excellence & Code Mastery",
    },
    {
      icon: Medal,
      title: "2x National CTF Champion",
      subtitle: "Karpagam, Dr. Mahalingam",
    },
    {
      icon: Star,
      title: "17th/40 Teams - International CTF",
      subtitle: "KPR Institute 2025",
    },
    {
      icon: Award,
      title: "37th/389 Teams - 48hr CTF",
      subtitle: "Hackers Gambit, Jaihind College",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // Credentials
            </span>

            <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
              <span className="text-foreground">Certifications & </span>
              <span className="text-gradient-cyber">Achievements</span>
            </h2>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 card-cyber rounded-lg hover:border-primary/50 transition-colors group"
              >
                <achievement.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-foreground font-bold font-mono mb-1">
                  {achievement.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {achievement.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 card-cyber rounded-lg hover:border-primary/50 transition-all group"
              >
                {/* Icon */}
                <div
                  className={`p-3 rounded-lg ${
                    cert.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  }`}
                >
                  <Award
                    className={`w-6 h-6 ${
                      cert.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-bold font-mono text-foreground group-hover:text-primary transition-colors text-sm">
                    {cert.name}
                  </h3>

                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </span>

                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Score */}
                {cert.score && (
                  <span className="px-3 py-1 text-xs font-mono rounded bg-accent/10 text-accent">
                    {cert.score}
                  </span>
                )}

                {/* Verify icon */}
                {cert.verify && (
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                    title="Verify certificate"
                  >
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
