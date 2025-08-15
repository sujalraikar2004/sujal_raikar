import { useState } from 'react';
import { ExternalLink, Github, Brain, Shield, Car, Eye, GraduationCap, Gamepad2, Globe, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Import project images
import medicalImage from '../assests/medical.jpg';
import saitourzImage from '../assests/saitourz.png';
import phishingImage from '../assests/phishing.jpeg';
import carparkingImage from '../assests/carparking.webp';
import deepfakeImage from '../assests/deepfake.jpeg';
import dropoutImage from '../assests/droupout.webp';
import typingImage from '../assests/typing.png';
import treasurehuntImage from '../assests/treasurehunt.webp';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Smart AI Multimodal Medical Chatbot',
      description: 'RAG-based medical assistance chatbot with multimodal capabilities',
      longDescription: 'An advanced medical chatbot utilizing Retrieval-Augmented Generation (RAG) technology to provide accurate medical information and assistance. Features multimodal capabilities including text, image, and voice processing.',
      icon: Brain,
      image: medicalImage,
      tags: ['Python', 'LangChain', 'RAG', 'NLP', 'Healthcare'],
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    {
      id: 7,
      title: 'Saitourz.com',
      description: 'Tourism platform for discovering and booking experiences',
      longDescription: 'Comprehensive tourism platform that helps users discover destinations, book experiences, and connect with local guides for personalized travel experiences.',
      icon: Globe,
      image: saitourzImage,
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Payment Gateway'],
      status: 'Live',
      github: 'https://github.com/sujalraikar2004/saitourshoildays',
      demo: 'https://saitourz.com'
    },
    {
      id: 2,
      title: 'Phishing Website Detector',
      description: 'ML-powered system to detect and prevent phishing attacks',
      longDescription: 'Machine learning-based security system that analyzes website characteristics and user behavior patterns to identify potential phishing threats in real-time.',
      icon: Shield,
      image: phishingImage,
      tags: ['Python', 'Scikit-learn', 'Cybersecurity', 'Machine Learning'],
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Smart AI Parking System',
      description: 'Computer vision system for intelligent parking management',
      longDescription: 'IoT and computer vision-powered parking management system that automatically detects available parking spaces and guides drivers to optimal spots.',
      icon: Car,
      image: carparkingImage,
      tags: ['Python', 'OpenCV', 'IoT', 'Computer Vision', 'Arduino'],
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Deepfake Detection System',
      description: 'AI system to identify manipulated media content',
      longDescription: 'Advanced deep learning system capable of detecting deepfake videos and images using state-of-the-art neural network architectures.',
      icon: Eye,
      image: deepfakeImage,
      tags: ['Python', 'TensorFlow', 'Computer Vision', 'Deep Learning'],
      status: 'In Progress',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Student Dropout Risk Predictor',
      description: 'Predictive analytics for educational risk assessment',
      longDescription: 'Machine learning model that analyzes student data to predict dropout risk and provide early intervention recommendations for educational institutions.',
      icon: GraduationCap,
      image: dropoutImage,
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis'],
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Multiplayer Typing Game',
      description: 'Real-time competitive typing game with live leaderboards',
      longDescription: 'Real-time multiplayer typing game built with modern web technologies, featuring live competitions, chat functionality, and comprehensive statistics tracking.',
      icon: Gamepad2,
      image: typingImage,
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    
    {
      id: 8,
      title: 'Multiplayer Treasure Hunt Game',
      description: 'Interactive AR-based treasure hunting experience',
      longDescription: 'Innovative multiplayer game combining augmented reality and geolocation features for an immersive treasure hunting experience in real-world locations.',
      icon: Search,
      image: treasurehuntImage,
      tags: ['React Native', 'AR', 'Geolocation', 'Real-time'],
      status: 'In Progress',
      github: '#',
      demo: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-success/20 text-success border-success/50';
      case 'In Progress': return 'bg-warning/20 text-warning border-warning/50';
      case 'Live': return 'bg-primary/20 text-primary border-primary/50';
      default: return 'bg-muted/20 text-muted-foreground border-muted/50';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI/ML, web development, and emerging technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="aspect-video bg-muted">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button asChild size="sm" variant="outline" className="flex-1" disabled={project.github === '#'}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm" className="flex-1" disabled={project.demo === '#'}>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project Modal would go here */}
        <div className="mt-16 text-center">
          <Button onClick={() => window.open('https://github.com/sujalraikar2004', '_blank')} variant="outline" size="lg" className="btn-ghost">
            View More on GitHub
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;