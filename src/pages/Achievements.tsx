import { Trophy, Award, Medal, Calendar, Users, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: '1st Place – Vence Hackathon, Angadi Institute of Technology (National Level)',
      category: 'Hackathon',
      date: 'October 2023',
      description: 'Secured first place in a national-level hackathon hosted by Angadi Institute of Technology, showcasing innovative problem-solving skills.',
      icon: Trophy,
      highlight: true,
      tags: ['Hackathon', 'National Level', 'First Place']
    },
    {
      id: 2,
      title: '1st Place – Hackfinite Hackathon, Gadag (National Level)',
      category: 'Hackathon',
      date: 'August 2023',
      description: 'Achieved first place in the Hackfinite national-level hackathon, competing against teams from across the country.',
      icon: Trophy,
      highlight: true,
      tags: ['Hackathon', 'Winning', 'National Level']
    },
    {
      id: 3,
      title: '1st Runners-Up – GPT-4 Hackathon (Intercollege)',
      category: 'Hackathon',
      date: 'July 2023',
      description: 'Finished as the first runners-up in an intercollege hackathon focused on developing applications with GPT-4.',
      icon: Medal,
      highlight: true,
      tags: ['GPT-4', 'AI', 'Runners-Up']
    },
   
  ];

  const stats = [
    { label: 'Hackathon Wins', value: '3+', icon: Trophy },
    { label: 'Competitions', value: '10+', icon: Medal },
    { label: 'Awards', value: '6+', icon: Award },
    { label: 'Recognition', value: '5+', icon: Target }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Achievements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for innovation, technical excellence, and leadership in technology competitions and academic pursuits
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className={`relative ${achievement.highlight ? 'order-first' : ''}`}>
              {/* Timeline Line */}
              {index !== achievements.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-primary to-transparent hidden md:block" />
              )}
              
              <div className={`glass-card p-6 ${achievement.highlight ? 'border-primary/50 bg-primary/5' : ''}`}>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Date */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 min-w-fit">
                    <div className={`p-3 rounded-full ${achievement.highlight ? 'bg-primary text-primary-foreground' : 'bg-glass border border-glass-border'}`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{achievement.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className={`text-xl font-bold ${achievement.highlight ? 'text-primary' : ''}`}>
                          {achievement.title}
                        </h3>
                        <Badge variant={achievement.highlight ? 'default' : 'secondary'}>
                          {achievement.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Ready for New Challenges</h3>
            <p className="text-muted-foreground mb-6">
              Always looking for opportunities to innovate, compete, and contribute to meaningful projects. 
              Let's collaborate on the next big breakthrough!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-hero px-6 py-3 rounded-xl">
                Get In Touch
              </a>
              <a href="/projects" className="btn-ghost px-6 py-3 rounded-xl">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;