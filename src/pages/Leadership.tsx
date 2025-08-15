// import { Users, Crown, Target, Heart, Zap, Star } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';

// const Leadership = () => {
//   const leadershipRoles = [
//     {
//       id: 1,
//       title: 'Technical Lead - College Development Team',
//       organization: 'KLE Technological University',
//       period: '2023 - Present',
//       description: 'Leading a team of 12+ developers in building innovative solutions for campus digitization. Managed project timelines, code reviews, and technical architecture decisions.',
//       icon: Crown,
//       achievements: [
//         'Successfully delivered 5+ campus applications',
//         'Reduced development time by 40% through process optimization',
//         'Mentored 8 junior developers in modern web technologies'
//       ],
//       skills: ['Team Leadership', 'Project Management', 'Mentoring']
//     },
//     {
//       id: 2,
//       title: 'President - Computer Science Society',
//       organization: 'KLE Tech CS Department',
//       period: '2023 - 2024',
//       description: 'Organized technical events, workshops, and coding competitions. Increased society participation by 200% and established partnerships with tech companies.',
//       icon: Users,
//       achievements: [
//         'Organized 15+ technical workshops and seminars',
//         'Increased active membership from 50 to 150+ students',
//         'Secured sponsorships worth ₹2L+ for events'
//       ],
//       skills: ['Event Management', 'Public Speaking', 'Networking']
//     },
//     {
//       id: 3,
//       title: 'Hackathon Organizer & Judge',
//       organization: 'Various Institutions',
//       period: '2022 - Present',
//       description: 'Organized and judged multiple hackathons across different colleges. Evaluated 100+ innovative projects and provided mentorship to participating teams.',
//       icon: Target,
//       achievements: [
//         'Organized 3 major hackathons with 500+ participants',
//         'Judged 8+ inter-college technical competitions',
//         'Mentored 25+ winning teams'
//       ],
//       skills: ['Event Planning', 'Technical Evaluation', 'Mentoring']
//     }
//   ];

//   const sportsAchievements = [
//     {
//       sport: 'Cricket',
//       level: 'Inter-College Champion',
//       description: 'Led college cricket team to victory in regional championship',
//       icon: Target
//     },
//     {
//       sport: 'Football',
//       level: 'District Level Player',
//       description: 'Represented district in state-level football tournament',
//       icon: Zap
//     },
//     {
//       sport: 'Table Tennis',
//       level: 'College Team Captain',
//       description: 'Captain of college table tennis team for 2 consecutive years',
//       icon: Star
//     }
//   ];

//   const volunteerWork = [
//     {
//       title: 'Tech Education for Underprivileged',
//       organization: 'NGO Partnership',
//       impact: '200+ students taught basic computer skills',
//       description: 'Volunteer teacher providing free technology education to underprivileged children in rural areas.',
//       icon: Heart
//     },
//     {
//       title: 'Open Source Mentorship',
//       organization: 'GitHub & Dev Communities',
//       impact: '50+ developers mentored',
//       description: 'Active mentor in open source communities, helping newcomers contribute to meaningful projects.',
//       icon: Users
//     },
//     {
//       title: 'Environmental Tech Solutions',
//       organization: 'Green Tech Initiative',
//       impact: '3 eco-friendly apps developed',
//       description: 'Developed technology solutions for environmental conservation and awareness campaigns.',
//       icon: Target
//     }
//   ];

//   return (
//     <div className="min-h-screen py-20 px-4">
//       <div className="container mx-auto max-w-6xl">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Leadership & Impact</h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Driving positive change through technical leadership, community engagement, and social impact initiatives
//           </p>
//         </div>

//         {/* Leadership Roles */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold gradient-text text-center mb-12">Leadership Positions</h2>
//           <div className="space-y-8">
//             {leadershipRoles.map((role) => (
//               <div key={role.id} className="glass-card p-6">
//                 <div className="flex flex-col lg:flex-row gap-6">
//                   <div className="flex items-start gap-4 lg:min-w-fit">
//                     <div className="p-3 rounded-full bg-primary text-primary-foreground">
//                       <role.icon className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-1">{role.title}</h3>
//                       <p className="text-primary font-medium">{role.organization}</p>
//                       <p className="text-sm text-muted-foreground">{role.period}</p>
//                     </div>
//                   </div>

//                   <div className="flex-1 space-y-4">
//                     <p className="text-muted-foreground leading-relaxed">
//                       {role.description}
//                     </p>

//                     <div>
//                       <h4 className="font-semibold mb-2">Key Achievements:</h4>
//                       <ul className="space-y-1">
//                         {role.achievements.map((achievement, index) => (
//                           <li key={index} className="flex items-start">
//                             <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                             <span className="text-muted-foreground">{achievement}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                       {role.skills.map((skill, index) => (
//                         <Badge key={index} variant="secondary">
//                           {skill}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Sports Achievements */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold gradient-text text-center mb-12">Sports & Athletics</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {sportsAchievements.map((sport, index) => (
//               <div key={index} className="glass-card p-6 text-center">
//                 <sport.icon className="w-12 h-12 text-primary mx-auto mb-4" />
//                 <h3 className="text-xl font-bold mb-2">{sport.sport}</h3>
//                 <Badge className="mb-3">{sport.level}</Badge>
//                 <p className="text-muted-foreground text-sm">{sport.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Community Impact */}
//         <section>
//           <h2 className="text-3xl font-bold gradient-text text-center mb-12">Community Impact</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {volunteerWork.map((work, index) => (
//               <div key={index} className="glass-card p-6">
//                 <div className="flex items-center mb-4">
//                   <work.icon className="w-8 h-8 text-primary mr-3" />
//                   <h3 className="text-lg font-bold">{work.title}</h3>
//                 </div>
//                 <p className="text-primary font-medium mb-2">{work.organization}</p>
//                 <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-3 inline-block">
//                   {work.impact}
//                 </div>
//                 <p className="text-muted-foreground text-sm">{work.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Leadership Philosophy */}
//         <div className="mt-16">
//           <div className="glass-card p-8 text-center max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold gradient-text mb-4">Leadership Philosophy</h3>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               "True leadership is not about being in charge, but about taking care of those in your charge. 
//               I believe in empowering others, fostering innovation, and creating positive impact through technology. 
//               Every project is an opportunity to build something meaningful while helping others grow."
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leadership;