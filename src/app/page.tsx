import Image from 'next/image';
import Link from 'next/link';
import {
  Smartphone,
  CodeXml,
  Cloud,
  ArrowRight,
  Mail,
  Twitter,
  Linkedin,
  Facebook,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { projects } from '@/lib/projects';

const services = [
  {
    icon: <Smartphone className="h-12 w-12 text-accent" />,
    title: 'Web Design',
    description:
      'I create visually stunning, user-friendly websites that are tailored to your brand and business goals. From responsive layouts to intuitive navigation, I ensure your website not only looks great but also delivers an exceptional user experience.',
  },
  {
    icon: <CodeXml className="h-12 w-12 text-accent" />,
    title: 'Web Development',
    description:
      'I build fast, secure, and scalable websites using the latest technologies. Whether it\'s a simple landing page or a complex web application, I deliver robust solutions that perform seamlessly across all devices.',
  },
  {
    icon: <Cloud className="h-12 w-12 text-accent" />,
    title: 'Cloud Solutions',
    description:
      'I specialize in designing secure, scalable, and cost-effective cloud solutions using AWS services. My approach is collaborative, and I work closely with clients to ensure their cloud infrastructure meets their business needs.',
  },
];

const socialLinks = [
  {
    href: 'mailto:amreshbaskar@gmail.com',
    icon: <Mail className="h-6 w-6" />,
    name: 'Email',
  },
  {
    href: 'https://x.com/amr_officialpub',
    icon: <Twitter className="h-6 w-6" />,
    name: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/amresh-b-830350325/',
    icon: <Linkedin className="h-6 w-6" />,
    name: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61569988602117',
    icon: <Facebook className="h-6 w-6" />,
    name: 'Facebook',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <main className="flex-1">
        {/* Header Section */}
        <header className="py-24 sm:py-32">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg">
              <span className="text-accent">Hello</span> I&apos;m
            </p>
            <h1 className="text-6xl sm:text-7xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Amresh B
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium mt-4">
              Developer | Cloud Enthusiast | Blogger | <span className="text-accent">Designer.</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
              I’m a skilled professional with expertise in website creation, design, and cloud computing. I specialize in building secure, scalable solutions using AWS services, cloud architecture, and DevOps, while also creating visually appealing websites. Explore my projects and contributions, and feel free to reach out—let’s collaborate and create something amazing!
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="https://wa.me/918072799323" target="_blank">Say Hello on WhatsApp</a>
              </Button>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-20 bg-primary/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="https://placehold.co/500x500.png"
                  alt="About Amresh B"
                  width={500}
                  height={500}
                  className="rounded-full shadow-2xl shadow-accent/20"
                  data-ai-hint="abstract geometric"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold">About <span className="text-accent">Me</span></h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Hello! I’m Amresh, a cloud enthusiast and developer with 3+ years of experience in data processing and AWS solutions. Welcome to my GitHub, where I showcase my projects, skills, and passion for building scalable, secure systems. Let’s innovate and create something amazing together!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold">What I Offer!</p>
              <h2 className="text-4xl font-bold">My <span className="text-accent">Services</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="bg-card border-border/50 text-center p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-primary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold">Portfolio</p>
              <h2 className="text-4xl font-bold"><span>Latest</span> Project</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="bg-card border-border/50 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-accent">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button asChild variant="link" className="text-accent p-0 h-auto">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold">Contact <span className="text-accent">Me!</span></h2>
              <p className="mt-2 text-accent">If you have any project in your mind</p>
              <p className="mt-4 text-muted-foreground">
                You can reach me through the contact form provided on this website. Simply fill out the form with your name, email address, and message, and I will get back to you as soon as possible.
              </p>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <Button asChild key={social.name} variant="ghost" size="icon" className="hover:bg-accent/20 text-muted-foreground hover:text-accent">
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </footer>
    </div>
  );
}
