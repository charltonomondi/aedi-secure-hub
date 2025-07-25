import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Search, Users, AlertTriangle, Cloud, GraduationCap, Smartphone, Code, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Penetration Testing",
    description: "Comprehensive security testing to identify vulnerabilities in your systems.",
    price: "From $2,000"
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Vulnerability Assessment",
    description: "Automated and manual assessment of your infrastructure's security posture.",
    price: "From $1,500"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Social Engineering Testing",
    description: "Test your team's awareness against phishing and social engineering attacks.",
    price: "From $1,000"
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-primary" />,
    title: "Incident Response",
    description: "24/7 incident response and recovery services to minimize breach impact.",
    price: "From $5,000"
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Cloud Security Assessment",
    description: "Secure your cloud infrastructure with comprehensive security audits.",
    price: "From $2,500"
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Security Training",
    description: "Cybersecurity awareness training to empower your workforce.",
    price: "From $500"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile App Development",
    description: "Secure mobile applications with built-in cybersecurity features.",
    price: "From $10,000"
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Custom Web Development",
    description: "Secure web applications and platforms tailored to your business needs.",
    price: "From $8,000"
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "AI & Machine Learning Solutions",
    description: "Intelligent security solutions powered by artificial intelligence and ML.",
    price: "From $15,000"
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-16 bg-cyber-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Cybersecurity Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security solutions to protect your business from evolving cyber threats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Link to="/services">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="primary-gradient text-white px-8 py-3">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;