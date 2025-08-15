import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import profilePic from "../assests/width_882.webp";
import resumePdf from '../assests/sujalRaikarResume.pdf';

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.setAttribute('download', 'SujalRaikar_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
            <img src={profilePic} alt="Sujal Raikar" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 blur-xl"></div>
        </div>

        {/* Hero Content */}
        <div className="space-y-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-shadow">
            <span className="gradient-text">Sujal Raikar</span>
          </h1>
          
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl text-primary font-semibold">
              Computer Science Engineering Student
            </h2>
            <div className="flex flex-wrap justify-center gap-2 text-lg text-muted-foreground">
              <span>MERN Stack Developer</span>
              <span>•</span>
              <span>AI/ML Enthusiast</span>
              <span>•</span>
              <span>Android IOS Developer</span>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Innovative technology enthusiast with expertise in full-stack development and artificial intelligence. 
            Passionate about creating impactful solutions and exploring emerging technologies.
          </p>

          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <MapPin size={18} />
            <span>Belagavi, Karnataka, India</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link to="/projects">
            <Button className="btn-hero group">
              View My Projects
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button className="btn-ghost group">
              <Mail className="mr-2 w-5 h-5" />
              Get In Touch
            </Button>
          </Link>
          
          <Button variant="outline" className="btn-ghost group" onClick={handleDownloadCV}>
            <Download className="mr-2 w-5 h-5" />
            Download CV
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-3xl mx-auto">
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold gradient-text">8+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold gradient-text">15+</div>
            <div className="text-sm text-muted-foreground">Tech Skills</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold gradient-text">3+</div>
            <div className="text-sm text-muted-foreground">Hackathon Wins</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold gradient-text">5</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;