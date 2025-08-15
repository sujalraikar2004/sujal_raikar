import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sujalraikar84@gmail.com',
      href: 'mailto:sujalraikar84@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6364638991',
      href: 'tel:+916364638991'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Belagavi, Karnataka, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sujal-raikar-96a9742a3/',
      color: 'hover:text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sujalraikar2004',
      color: 'hover:text-gray-400'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/916364638991',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss new opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to discuss technology trends, 
                or just want to say hello, I'm always excited to connect with fellow 
                developers and innovators.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 rounded-lg bg-glass/50 hover:bg-glass border border-glass-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <info.icon className="w-6 h-6 text-primary mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-glass/50 hover:bg-glass border border-glass-border hover:border-primary/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">
                I typically respond to messages within 24 hours. 
                For urgent matters, feel free to call or WhatsApp!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          

        {/* Location Map Placeholder */}
        <div className="mt-16">
          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">Based in Belagavi, Karnataka</h3>
            <p className="text-muted-foreground mb-6">
              Located in Belagavi, Karnataka, available for local meetups and remote collaborations worldwide.
            </p>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.692884944983!2d74.5013063742019!3d15.84909374665498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66a0d5a8b1b9%3A0x1b1b1b1b1b1b1b1b!2sSujal%20Raikar!5e0!3m2!1sen!2sin!4v1692124545123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a 
              href="https://maps.app.goo.gl/yXYbwhrvzP1Qmo9M7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-4 text-lg font-semibold rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MapPin className="inline-block mr-2 w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;