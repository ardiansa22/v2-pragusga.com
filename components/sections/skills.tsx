'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Cloud, Wrench, Text, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      'React',
      'Tailwind CSS',
      'Bootstrap CSS',
      'HTML/CSS',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      'Express.js',
      'Laravel',
      'FastAPI',
      'REST',
    ],
  },
  {
    title: 'DevOps',
    icon: Cloud,
    skills: [
      'Docker',
      'CI/CD',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'MongoDB',
      'Firebase',
    ],
  },
  {
    title: 'Machine Learning',
    icon: Wrench, // Ganti jika punya ikon khusus ML
    skills: [
      'scikit-learn',
      'TensorFlow',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Jupyter Notebook',
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      'VS Code',
      'Postman',
      'Git',
      'Notion',
      'Trello',
    ],
  },
  {
    title: 'Languages',
    icon: Text,
    skills: [
      'Indonesian',
      'English',
      'JavaScript',
      'Python',
      'PHP',
    ],
  },
];


export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary-blue">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build robust and scalable
            applications
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const halfLength = Math.ceil(category.skills.length / 2);
            const leftColumnSkills = category.skills.slice(0, halfLength);
            const rightColumnSkills = category.skills.slice(halfLength);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all bg-card/50 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(30%-1rem)] min-w-[280px] max-w-[400px]"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary-blue/10">
                    <Icon className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  {/* Left Column */}
                  <ul className="space-y-2">
                    {leftColumnSkills.map((skill) => (
                      <li
                        key={skill}
                        className="text-muted-foreground flex items-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-blue/70 mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                  {/* Right Column */}
                  <ul className="space-y-2">
                    {rightColumnSkills.map((skill) => (
                      <li
                        key={skill}
                        className="text-muted-foreground flex items-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-blue/70 mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
