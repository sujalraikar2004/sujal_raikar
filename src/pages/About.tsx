import { Brain, Code, Database, Globe, Smartphone, Trophy } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Next.js', level: 75 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Expo', level: 75 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 95 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 }
      ]
    },
    {
      title: 'AI/ML & Data Science',
      icon: Brain,
      skills: [
        { name: 'DeepLearning', level: 75 },
        { name: 'Machine Learning', level: 70 },
        { name: 'Generative AI', level: 80 },
        { name: 'NLP', level: 75 },
        { name: 'Computer Vision', level: 70 }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Git', level: 90 }
      ]
    }
  ];

  const languages = [
    'English', 'Hindi', 'Kannada', 'Marathi', 'Konkani'
  ];

  const interests = [
    'Travelling & exploring new places',
    'Discovering emerging technologies',
    'Competitive sports & fitness',
    'Open source contributions'
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and innovation, I'm constantly exploring new ways to solve problems and create meaningful digital experiences.
          </p>
        </div>

        {/* Professional Summary */}
        <div className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Trophy className="mr-3 text-primary" />
            Professional Summary
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Motivated and innovative Computer Science Engineering student with expertise in MERN stack development, 
            React Native app development, and Artificial Intelligence/Machine Learning. Adept at advanced Python, 
            JavaScript, and modern AI technologies including NLP, Generative AI, and Computer Vision. Demonstrated 
            ability to deliver impactful solutions through hands-on projects and a strong record of hackathon achievements. 
            Recognized for creativity, teamwork, and technical excellence.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold gradient-text text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center mb-6">
                  <category.icon className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Interests</h3>
            <ul className="space-y-2">
              {interests.map((interest, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;